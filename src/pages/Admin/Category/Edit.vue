<template>
    
    <div class="mx-auto container bg-color-white"> 
        <div class="text-[50px] text-color-2 font-great text-center">
            Chỉnh sửa Danh mục
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
        <el-form-item label="Description">
            <el-input v-model="sizeForm.description" type="textarea" />
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
            <el-button type="primary" @click="onSubmit">Update</el-button>
            <el-button>Cancel</el-button>
        </el-form-item>
        </el-form>
    </div>
  </template>
  
<script setup>

    import { onMounted, ref } from 'vue'
    import { useRoute, useRouter } from 'vue-router';
    import { createCategory, getCategoryList, getCategoryDetail, editCategory } from '../../../service/categoryService';

    const router = useRouter()
    const options = ref([])
    const route = useRoute();
    const id = route.params.id;

    const sizeForm = ref({
        title: '',
        description: '',
        status: '',
        position : '',
        parentId : '',
    })
    
    const fetchCategorys = () => {
        const fetchApi = async () => {
            const result = await getCategoryList()
            options.value = result.map(item => ({ value: item.id, label: item.title }));
        }
        fetchApi();
    };    

    const fetchDataCategory = () =>{
        const fetchApi = async () => {
            const result = await getCategoryDetail(id);
            if(result.parentId === 0) result.parentId = ""
            sizeForm.value = result;
        }
        fetchApi();
    }
    onMounted(() => {
        fetchDataCategory();
        fetchCategorys();
    });

  const onSubmit = () => {
    const fetchApi = async () => {
        const result = await editCategory(id, sizeForm.value)
        if(result){
            console.log("Success");
            router.replace({name : 'category'})
        }
    } 
    fetchApi();
    console.log(sizeForm);
}
</script>

  