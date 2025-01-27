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
      <el-form-item label="Description" class="desciption-create-product">
        <Editor
            v-model="sizeForm.description"
            api-key="5igfhdajsjjgz97l6dnw1fg7u9pn6192n0tewmq3kx1shkg2"
            :init="{
                    plugins: 'lists link image table code help wordcount'
                }"
        />
      </el-form-item>
      <el-form-item class="flex justify-center">
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup>
    import {reactive } from 'vue'
    import { useRouter } from 'vue-router';
    import { createRole } from '@/service/roleService';
    import Editor from "@tinymce/tinymce-vue";

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

  