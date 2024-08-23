<script lang="ts" setup>
    import { computed, ref, onMounted } from 'vue'
    import { ElTable } from 'element-plus'
    import { RouterLink } from 'vue-router';
    import { deleteCategory, getCategoryList, getCategoryListSort, changeStatus } from '../../../service/categoryService';

    interface Data {
        lastName : "",
        address : "",
        phone : "",
        totalPrice : "",
        quantity : ""
    }

    const search = ref('')
    const data = ref<Data[]>([]);

    // const fetchCategorys = () => {
    //     const fetchApi = async () => {
    //         const result = await getCategoryList()
    //         data.value = result;
    //     }
    //     fetchApi();
    // };    

    // onMounted(async () => await fetchCategorys());

    // const filterTableData =  computed(() =>
    //     data.value.filter(
    //         (data) =>
    //             !search.value ||
    //             data.title.toLowerCase().includes(search.value.toLowerCase())
    //     )
    // )

    const handleDelete = async (row: Data) => {
        const result = await deleteCategory({
            id: row
        })
        if(result){
            fetchCategorys()
        }
         
    } 

</script>

<template>
    <div class="p-10">
        <div class="text-[50px] text-color-2 font-great text-center">
            Danh sách đơn hàng
        </div>
        <div class="pt-8">
            <el-table :data="filterTableData">
                <el-table-column type="selection" width="55" />
                <el-table-column label="Tên" prop="lastName" />
                <el-table-column label="Số điện thoại" prop="phone" />
                <el-table-column label="Địa chỉ" prop="address" />
                <el-table-column label="Tổng số lượng" prop="quantity" />
                <el-table-column label="Tổng tiền" prop="totalPrice" />
                <el-table-column align="right">
                    <template #header>
                    <el-input v-model="search" size="small" placeholder="Type to search" />
                    </template>
                    <template #default="scope">
                    <el-button size="small">
                        <RouterLink :to="`/admin/edit-category/${scope.row.id}`">
                            Xác nhận
                        </RouterLink>   
                        </el-button>
                    <el-button
                        size="small"
                        type="danger"
                        @click="handleDelete(scope.row.id)"
                    >
                        Xóa
                    </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
  </template>
  
  