<template>
  <div class="mx-auto container mt-8 max-md:mt-3">
    <div class="text-[50px] text-color-2 font-great text-center max-md:text-3xl">
      Thêm nhóm quyền
    </div>
    <el-form
        class="w-full p-3 responsive-form"
        :model="sizeForm"
        label-width="auto"
        size="large"
    >
      <el-form-item label="Tiêu đề">
        <el-input v-model="sizeForm.title" class="bg-color-white-2" />
      </el-form-item>
      <el-form-item label="Mô tả">
        <el-input v-model="sizeForm.description" type="textarea" class="bg-color-white-2" />
      </el-form-item>
      <el-form-item class="flex justify-center">
        <el-button type="primary" @click="onSubmit">Tạo</el-button>
        <el-button>Huỷ</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup>
    import {reactive } from 'vue'
    import { useRouter } from 'vue-router';
    import { createRole } from '@/service/roleService';

    const router = useRouter()

  
  const sizeForm = reactive({
    title: '',
    description: '',
  })

  const onSubmit = async () => {
    const result = await createRole(sizeForm)
    if(result){
        console.log("Success");
        router.replace({name : 'role'})
    }
  }
</script>

  