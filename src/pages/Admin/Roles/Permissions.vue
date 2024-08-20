<script lang="ts" setup>
    import { ElTable } from 'element-plus'
    import { onMounted, ref } from 'vue';
    import { getRoleList, UpdatePermissions } from '../../../service/roleService';

    const data = ref<User[]>([]);
    const permission = ref<Permission[]>([]);

    const fetchRoles = () => {
        const fetchApi = async () => {
            const result = await getRoleList()
            data.value = result;
            permission.value = result.map((role: any) => ({
                id: role.id,
                permission: role.permissions.split(',')
            }));
        }
        fetchApi();
    };
    onMounted(fetchRoles);

    interface User {
        permission: string
    }
    interface Permission {
        id: number;
        permission: string[];
    }
    const tableData: User[] = [
    {
        title : "Xem Sản phẩm",
        permission : "product_view"
    },
    {
        title : "Tạo Sản phẩm",
        permission : "product_create"
    },
    {
        title : "Sửa Sản phẩm",
        permission : "product_edit"
    },
    {
        title : "Xóa Sản phẩm",
        permission : "product_delete"
    },
    {
        title : "Xem danh mục",
        permission : "category_view"
    },
    {
        title : "Thêm danh mục",
        permission : "category_create"
    },
    {
        title : "Xóa danh mục",
        permission : "category_delete"
    },
    {
        title : "Xem tài khoản",
        permission : "account_view"
    },
    {
        title : "Thêm tài khoản",
        permission : "account_create"
    },
    {
        title : "Xóa tài khoản",
        permission : "account_delete"
    },
    {
        title : "Xem nhóm quyền",
        permission : "role_view"
    },
    {
        title : "Thêm nhóm quyền",
        permission : "role_create"
    },
    {
        title : "Xóa nhóm quyền",
        permission : "role_delete"
    },
    {
        title : "Phân quyền",
        permission : "permissions"
    },

    ]

    const handleClick = (id: number, row: User, e : Event) => {
        const index = permission.value.findIndex(p => p.id === id);
        if(e){
            if (index !== -1) {
                if (!permission.value[index].permission.includes(row.permission)) {
                    permission.value[index].permission.push(row.permission);
                }}
            else{
                permission.value.push({ id, permission: [row.permission] });
            }
        } else {
            if (index !== -1) {
                permission.value[index].permission = permission.value[index].permission.filter(
                    p => p !== row.permission
                );
                if (permission.value[index].permission.length === 0) {
                    permission.value.splice(index, 1);
                }
            }
        }
    };
    const isChecked = (id: number, row: string) => {
        const checked = data.value.find(p => p.id === id);
        return checked ? checked.permissions.includes(row.permission) : false;
    };
    const handleUpdate = async () =>{
        const result = await UpdatePermissions(permission.value);
        console.log(permission.value);
        
    }
    
    
</script>
<template>
    <div class="container mx-auto py-5">
        <div class="text-[50px] text-color-2 font-great text-center">
            Phân quyền
        </div>
        <div class="text-right">
            <el-button type="primary" plain @click="handleUpdate">Cập nhật</el-button>
        </div>
        
        <el-table :data="tableData" class="w-full px-5">
            <el-table-column
                v-for="(item, index) in data"
                :key="index"
                :label="item.title"
                width="200"
                class="text-center"
            >   
                
                <template #default="scope">
                    <el-checkbox :label="scope.row.title" size="large" @change="handleClick(item.id, scope.row, $event)" :checked="isChecked(item.id, scope.row)"/>
                </template>
            </el-table-column>  
        </el-table>
    </div>
    
</template>