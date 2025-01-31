
<template>
    <div class="container mx-auto py-5">
        <div class="text-[50px] text-color-2 font-great text-center">
            Phân quyền
        </div>
        <div class="text-right">
            <el-button type="primary" plain @click="handleUpdate">Cập nhật</el-button>
        </div>
        
<!--        <el-table :data="tableData" class="w-full px-5">-->
<!--            <el-table-column-->
<!--                v-for="(item, index) in data"-->
<!--                :key="index"-->
<!--                :label="item.title"-->
<!--                width="200"-->
<!--                class="text-center"-->
<!--            >-->
<!--                <template #default="scope">-->
<!--                    <el-checkbox :label="scope.row.title" size="large" @change="handleClick(item.id, scope.row, $event)" :checked="isChecked(item.id, scope.row)"/>-->
<!--                </template>-->
<!--            </el-table-column>  -->
<!--        </el-table>-->
      <div class="bg-color-white-2 mt-10 rounded-lg max-md:rounded-lg text-center shadow-shadow-5 transition-all duration-300
                ease-in-out hover:shadow-none max-md:px-2">
        <div class="overflow-x-auto w-full max-md:my-0 max-md:mx-auto">
          <table class="w-full border-collapse min-w-[600px]">
            <thead>
            <tr class="border-b border-color-light">
              <th class="p-card-padding max-lg:p-5 max-md:text-xs max-md:p-1 text-color-dark whitespace-nowrap">Quyền </th>
              <th class="p-card-padding max-lg:p-5 max-md:text-xs max-md:p-1 text-color-dark whitespace-nowrap">Hình ảnh</th>
              <th class="p-card-padding max-lg:p-5 max-md:text-xs max-md:p-2 text-color-dark whitespace-nowrap">Tên sản phẩm</th>
              <th class="p-card-padding max-lg:p-5 max-md:text-xs max-md:p-2 text-color-dark whitespace-nowrap">Giá</th>
              <th class="p-card-padding max-lg:p-5 max-md:text-xs max-md:p-1 text-color-dark whitespace-nowrap">Vị trí</th>
              <th class="p-card-padding max-lg:p-5 max-md:text-xs max-md:p-2 text-color-dark whitespace-nowrap">Trạng thái</th>
              <th class="p-card-padding max-lg:p-5 max-md:text-xs max-md:p-2 text-color-dark whitespace-nowrap">Hành động</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
              <tr v-for="item in tableData">
                <td class="h-10 border-b border-color-light max-md:text-xs whitespace-nowrap text-center font-medium text-color-info-dark">{{ item.title }}</td>
                <td class="h-10 border-b border-color-light text-color-dark max-md:text-xs whitespace-nowrap text-center">
                  <label class="flex justify-center items-center cursor-pointer text-lg w-full py-2 px-3 rounded-md relative">
                    <input type="checkbox" class="hidden peer">
                    <span class="w-6 h-6 border-[3px] border-gray-300 rounded-lg flex items-center justify-center
                        peer-checked:border-blue-500 transition-colors relative"></span>
                    <span class="w-2.5 h-2.5 bg-blue-500 rounded-full peer-checked:inline-block hidden absolute left-[76px]"></span>
                  </label>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    
</template>
<script setup>
import { ElTable } from 'element-plus'
import { onMounted, ref } from 'vue';
import { getRoleList, UpdatePermissions } from '@/service/roleService';

const data = ref([]);
const permission = ref([]);

const fetchRoles = () => {
  const fetchApi = async () => {
    const result = await getRoleList()
    data.value = result;
    permission.value = result.map((role) => ({
      id: role.id,
      permission: role.permissions.split(',')
    }));
  }
  fetchApi();
};
onMounted(fetchRoles);

const tableData = [
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

const handleClick = (id, row, e ) => {
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
const isChecked = (id, row) => {
  const checked = data.value.find(p => p.id === id);
  return checked ? checked.permissions.includes(row.permission) : false;
};
const handleUpdate = async () =>{
  const result = await UpdatePermissions(permission.value);
  console.log(permission.value);

}


</script>