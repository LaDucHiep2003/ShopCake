<script setup>
    import { RouterLink } from 'vue-router';
    import Sort from './Sort.vue';
</script>



<template>
    <div class="text-[50px] text-color-2 font-great text-center">
            Danh sách sản phẩm
        </div>
    <div class="bg-color-white flex justify-between">
        <RouterLink :to="{ name : 'create'}">
            <el-button type="primary" plain>Thêm sản phẩm</el-button>
        </RouterLink>
    </div>
     
</template>