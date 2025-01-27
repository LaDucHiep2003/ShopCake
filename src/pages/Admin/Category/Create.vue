<template>
  <div class="mx-auto container mt-8 max-md:mt-3">
    <div class="text-[50px] text-color-2 font-great text-center max-md:text-2xl">
      Thêm danh mục sản phẩm
    </div>
    <el-form
        class="w-full p-3 responsive-form"
        :model="sizeForm"
        label-width="auto"
        size="large"
    >
      <el-form-item label="Title">
        <el-input v-model="sizeForm.title" class="bg-color-white-2" />
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
        <el-input v-model="sizeForm.description" type="textarea" class="bg-color-white-2" />
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
      <el-form-item class="flex justify-center">
        <el-button type="primary" @click="onSubmit">Tạo</el-button>
        <el-button>Hủy</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
    import { onMounted, reactive, ref } from 'vue'
    import { useRouter } from 'vue-router';
    import { createCategory, getCategoryList } from '@/service/categoryService';

    const router = useRouter()
    const options = ref([])
    
    const fetchCategorys = () => {
        const fetchApi = async () => {
            const result = await getCategoryList()
            options.value = result.map(item => ({ value: item.id, label: item.title }));
        }
        fetchApi();
    };    
    onMounted(async () => await fetchCategorys());

  const sizeForm = reactive({
    title: '',
    description: '',
    status: '',
    position : '',
    parentId : '',
    thumbnail : ''
  })
  const widget = window.cloudinary.createUploadWidget(
      { cloud_name : "dsxkwbfyq", upload_preset : "upload"},
      (error, result) =>{
        if(!error && result && result.event === "success"){
          console.log("OK ... ", result.info.url);
          sizeForm.thumbnail = result.info.url
        }
      }
  )

  const openUploadWidget = () =>{
    widget.open()
  }

  const onSubmit = () => {
    const fetchApi = async () => {
        const result = await createCategory(sizeForm)
        if(result){
            console.log("Success");
            router.replace({name : 'category'})
        }
    } 
    fetchApi();
    console.log(sizeForm);
}
</script>

  