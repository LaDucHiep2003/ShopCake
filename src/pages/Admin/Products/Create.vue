<template>
    
    <div class="mx-auto container bg-color-white" v-if="checkPermissions('product_create')"> 
        <div class="text-[50px] text-color-2 font-great text-center">
            Thêm sản phẩm
        </div>
        <el-form
            class="w-full p-3"
            :model="sizeForm"
            label-width="auto"
            size="large"
        >
        <el-form-item label="Title">
            <el-input v-model="sizeForm.title" />
        </el-form-item>
        <el-form-item label="Danh mục cha">
            <el-select
                v-model="sizeForm.parentId"
                clearable
                placeholder="Select"
                style="width: 240px"
            >
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
            </el-select>
        </el-form-item>
        <el-form-item label="Description" class="desciption-create-product">
            <Editor
                v-model="sizeForm.description"
                api-key="5igfhdajsjjgz97l6dnw1fg7u9pn6192n0tewmq3kx1shkg2"
                :init="{
                    plugins: 'lists link image table code help wordcount'
                }"
            />
        </el-form-item>
        
        <el-form-item label="Giá">
            <el-input v-model.number="sizeForm.price" />
        </el-form-item>
        <el-form-item label="Giá cũ">
            <el-input v-model.number="sizeForm.oldPrice" />
        </el-form-item>
        <el-form-item label="Ảnh">
            <el-button size="small" type="primary" @click="openUploadWidget()">Chọn ảnh</el-button>
        </el-form-item>
        <el-form-item label="Vị trí">
            <el-input v-model.number="sizeForm.position" />
        </el-form-item>
        <el-form-item label="Status">
            <el-radio-group v-model="sizeForm.status">
            <el-radio border value="active">Hoạt động</el-radio>
            <el-radio border value="inactive">Dừng hoạt động</el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">Create</el-button>
            <el-button>Cancel</el-button>
        </el-form-item>
        </el-form>
    </div>
  </template>
  
<script setup>

    import { onMounted, reactive, ref } from 'vue'
    import { useRouter } from 'vue-router';
    import { createProduct } from '@/service/productsService';
    import { getCategoryList } from '@/service/categoryService';
    import { userInfo } from '@/service/accountService'
    import Editor from '@tinymce/tinymce-vue'

    const widget = window.cloudinary.createUploadWidget(
        { cloud_name : "dsxkwbfyq", upload_preset : "upload"},
        (error, result) =>{
            if(!error && result && result.event === "success"){
                console.log("OK ... ", result.info.url);
                sizeForm.image = result.info.url
            }
        }
    )

    const data = ref({ permissions: [] });

    const fetAPi = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            const result = await userInfo({ token });
            data.value = result;
        }
    };

    const checkPermissions = (permission) => {
        return data.value.permissions.includes(permission);
    };

  const router = useRouter()

    const openUploadWidget = () =>{
        widget.open()
    }

  const options = ref([])
    
    const fetchCategorys = () => {
        const fetchApi = async () => {
            const result = await getCategoryList()
            options.value = result.map(item => ({ value: item.id, label: item.title }));
        }
        fetchApi();
    };    

    onMounted(() => {
        fetAPi()
        fetchCategorys()
    });

  
  const sizeForm = reactive({
    title: '',
    description: '',
    image: '',
    price: 0,
    status: '',
    position : '',
    oldPrice : '',
    parentId : '',
  })


  function  onSubmit() {
    const fetchApi = async () => {
        const result = await createProduct(sizeForm)
        if(result){
            console.log("Success");
            router.replace({name : 'product'})
        }        
    } 
    fetchApi();
}
</script>

  