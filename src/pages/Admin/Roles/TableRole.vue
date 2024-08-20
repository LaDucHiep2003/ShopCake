<script lang="ts" setup>
    import { computed, ref, onMounted } from 'vue'
    import { ElTable } from 'element-plus'
    import { RouterLink } from 'vue-router';
    import { deleteRole, getRoleList } from '../../../service/roleService';

    interface Role {
        id : string
        title: string
        description: Int16Array,
    }

    const search = ref('')
    const products = ref<Role[]>([]);

    const fetchProducts = () => {
        const fetchApi = async () => {
            const result = await getRoleList()
            products.value = result;
        }
        fetchApi();
    };

    onMounted(async () => await fetchProducts());

    const filterTableData =  computed(() =>
        products.value.filter(
            (data) =>
                !search.value ||
                data.title.toLowerCase().includes(search.value.toLowerCase())
        )
    )

    const handleDelete = async (row: Role) => {
        const result = await deleteRole({
            id: row
        })
        if(result){
            fetchProducts()
        }
    } 


</script>

<template>
    <div class="text-[50px] text-color-2 font-great text-center">
        Danh sách nhóm quyền
    </div>
    <div class="bg-color-white">
        <RouterLink :to="{ name : 'create-role'}">
            <el-button type="primary" plain>Thêm nhóm quyền</el-button>
        </RouterLink>
    </div>
    <div class="pt-8">
        <el-table :data="filterTableData">
            <el-table-column type="selection" width="55" />
            <el-table-column label="Title" prop="title" />
            <el-table-column label="Description" prop="description" />
            <el-table-column align="right">
                <template #header>
                <el-input v-model="search" size="small" placeholder="Type to search" />
                </template>
                <template #default="scope">
                <el-button size="small">
                    <RouterLink :to="`/admin/edit-role/${scope.row.id}`">
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
  
  