<template>
    <div class="mx-auto container bg-color-white"> 
        <div class="text-[50px] text-color-2 font-great text-center">
            Thêm nhóm quyền
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
        <el-form-item label="Description">
            <el-input v-model="sizeForm.description" type="textarea" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">Create</el-button>
            <el-button>Cancel</el-button>
        </el-form-item>
        </el-form>
    </div>
  </template>
<script setup>
    import {reactive } from 'vue'
    import { useRouter } from 'vue-router';
    import { createRole } from '../../../service/roleService';

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

  