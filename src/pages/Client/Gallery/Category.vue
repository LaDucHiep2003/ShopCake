<script lang="ts" setup>
    import { ref } from 'vue'
    import type { TabsPaneContext } from 'element-plus'
    import List from './List.vue';

    const activeName = ref('first')

    const handleClick = (tab: TabsPaneContext, event: Event) => {
        console.log(tab, event)
    }

</script>

<template>
    <div class="gallery py-[100px]">
        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
            <el-tab-pane label="ALL CATEGORIES" name="first"><List /></el-tab-pane>
            <el-tab-pane label="CAKES" name="second">Config</el-tab-pane>
            <el-tab-pane label="CUPCAKES" name="third">Role</el-tab-pane>
        </el-tabs>
    </div>
</template>