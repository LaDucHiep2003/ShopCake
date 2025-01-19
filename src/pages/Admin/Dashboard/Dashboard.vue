<template>
  <h1 class="text-xl font-extrabold">Dashboard</h1>
    <div class="p-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <div class="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
                <div class="flex justify-between mb-6">
                    <div>
                        <div class="text-2xl font-semibold mb-1">10</div>
                        <div class="text-sm font-medium text-gray-400">Active orders</div>
                    </div>
                    <div class="dropdown">
                        <button type="button" class="dropdown-toggle text-gray-400 hover:text-gray-600"><i class="ri-more-fill"></i></button>
                        <ul class="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
                            <li>
                                <a href="#" class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Profile</a>
                            </li>
                            <li>
                                <a href="#" class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Settings</a>
                            </li>
                            <li>
                                <a href="#" class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="w-full bg-gray-100 rounded-full h-4">
                        <div class="h-full bg-blue-500 rounded-full p-1" style="width: 60%;">
                            <div class="w-2 h-2 rounded-full bg-white ml-auto"></div>
                        </div>
                    </div>
                    <span class="text-sm font-medium text-gray-600 ml-4">60%</span>
                </div>
            </div>
        </div>
        <div>
            <div style="margin-bottom: 15px">Grid: <el-switch v-model="fill" /></div>
            <el-space :fill="fill" wrap>
            <el-card v-for="i in data" :key="i" class="box-card">
                <template #header>
                <div class="card-header">
                    <span>{{  i.title }}</span>
                </div>
                </template>
                <div class="text item">
                    <div>Tổng số   : {{i.Total}}</div>
                    <div>Hoạt động : {{ i.Active}}</div>
                    <div>Dừng hoạt động : {{ i.Inactive }}</div>
                </div>
            </el-card>
            </el-space>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'

    const fill = ref(true)
    const data = [
        {
            "title" : "Sản phẩm",
            "Total" : 4,
            "Active" : 1,
            "Inactive" : 0
        },
        {
            "title" : "Danh mục sản phẩm",
            "Total" : 1,
            "Active" : 1,
            "Inactive" : 0
        },
        {
            "title" : "Tài khoản admin",
            "Total" : 1,
            "Active" : 1,
            "Inactive" : 0
        },
    ]
</script>