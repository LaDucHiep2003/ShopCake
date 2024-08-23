<script lang="ts" setup>
    import { computed, ref, onMounted } from 'vue'
    import { ElTable } from 'element-plus'
    import { RouterLink } from 'vue-router';
    import { deleteCategory, getCategoryList, getCategoryListSort, changeStatus } from '../../../service/categoryService';
    import { confirmOrder, getOrderList, getOrderListConfirmed } from '../../../service/orderService';

    interface Data {
        firstName : "",
        lastName : "",
        address : "",
        phone : "",
        totalPrice : "",
        totalQuantity : ""
    }

    const search = ref('')
    const data = ref<Data[]>([]);

    const fetchData = () => {
        const fetchApi = async () => {
            const result = await getOrderListConfirmed()
            data.value = result;
        }
        fetchApi();
    };    

    onMounted(fetchData);

    const filterTableData =  computed(() =>
        data.value.filter(
            (data) =>
                !search.value ||
                data.title.toLowerCase().includes(search.value.toLowerCase())
        )
    )

    const handleDelete = async (row: Data) => {
        const result = await deleteCategory({
            id: row
        })
        if(result){
            fetchCategorys()
        }
         
    } 
    const handleConfirm = async (row: Data) => {
        const result = await confirmOrder({
            id: row
        })
        if(result){
            fetchData()
        }
         
    } 

</script>

<template>
    <div class="p-10">
        <div class="text-[50px] text-color-2 font-great text-center">
            Đơn hàng đã xác nhận
        </div>
        <div class="pt-8">
            <el-table :data="filterTableData">
                <el-table-column type="selection" width="55" />
                <el-table-column label="Họ" prop="firstName" />
                <el-table-column label="Tên" prop="lastName" />
                <el-table-column label="Số điện thoại" prop="phone" />
                <el-table-column label="Địa chỉ" prop="address" />
                <el-table-column label="Tổng số lượng" prop="totalQuantity" />
                <el-table-column label="Tổng tiền" prop="totalPrice" />
                <el-table-column align="right">
                    <template #header>
                    <el-input v-model="search" size="small" placeholder="Type to search" />
                    </template>
                    <template #default="scope">
                    <el-button size="small" @click="handleConfirm(scope.row.id)">
                        Hoàn đơn
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
  
  