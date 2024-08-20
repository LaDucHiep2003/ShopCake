<script lang="ts" setup>
    import { computed, ref, onMounted } from 'vue'
    import { ElTable } from 'element-plus'
    import { RouterLink } from 'vue-router';
    import { getAccountList, deleteAccount, changeStatus } from '@/service/accountService'

    interface Account {
        id : string
        fullName: string
        email: string,
        status : string
    }

    const search = ref('')
    const products = ref<Account[]>([]);

    const fetchAccounts = () => {
        const fetchApi = async () => {
            const result = await getAccountList()
            products.value = result;
        }
        fetchApi();
    };

    onMounted(fetchAccounts);

    const filterTableData =  computed(() =>
        products.value.filter(
            (data) =>
                !search.value ||
                data.fullName.toLowerCase().includes(search.value.toLowerCase())
        )
    )

    const handleDelete = async (row: Account) => {
        const result = await deleteAccount({
            id: row
        })
        if(result){
            fetchAccounts()
        }
    } 

    const handleChange = async (row: Account) => {
        if (row.status === 'active') {
            row.status = 'inactive';
        } else {
            row.status = 'active';
        }
        const result = await changeStatus(row.id,{
            status : row.status
        })
        if(result){
            console.log("Success");
        }
    }  


</script>
<template>
     <div class="text-[50px] text-color-2 font-great text-center">
        Danh sách tài khoản admin
    </div>
    <div class="bg-color-white flex justify-between">
        <RouterLink :to="{ name : 'create-accounts'}">
            <el-button type="primary" plain>Thêm tài khoản</el-button>
        </RouterLink>
    </div>
    <div class="pt-8">
        <el-table :data="filterTableData">
            <el-table-column type="selection" width="55" />
            <el-table-column label="Full Name" prop="fullName" />
            <el-table-column label="Email" prop="email" />
            <el-table-column label="Status" prop="status">
                <template #default="scope">
                    <el-button v-if="scope.row.status === 'active'" type="success" plain size="small" @click="handleChange(scope.row)">Hoạt động</el-button>
                    <el-button v-else type="danger" plain size="small" @click="handleChange(scope.row)">Dừng hoạt động</el-button>
                </template>
            </el-table-column>
            <el-table-column align="right">
                <template #header>
                <el-input v-model="search" size="small" placeholder="Type to search" />
                </template>
                <template #default="scope">
                <el-button size="small">
                    <RouterLink :to="`/admin/edit-accounts/${scope.row.id}`">
                        Edit
                    </RouterLink>   
                    </el-button>
                <el-button
                    size="small"
                    type="danger"
                    @click="handleDelete(scope.row.id)"
                >
                    Delete
                </el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>