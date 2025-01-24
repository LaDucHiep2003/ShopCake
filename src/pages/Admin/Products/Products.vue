
<template>
  <div class="mt-8 md:container max-md:px-2 mx-auto product">
    <RouterLink to="">
      <button class="px-5 font-semibold py-2 bg-color-13 text-color-white rounded-lg max-md:text-sm max-md:px-3">Thêm sản phẩm</button>
    </RouterLink>
    <div class="bg-color-white-2 mt-10 rounded-card-border-radius max-md:rounded-lg text-center shadow-shadow-5 transition-all duration-300 ease-in-out hover:shadow-none max-md:px-2">
      <form class="py-5 pl-3 max-lg:py-3 max-md:pl-1">
        <div class="h-10 relative border pl-3 border-color-light w-1/2 rounded-lg flex justify-between items-center max-md:h-8">
          <input placeholder="Nhập từ khóa..." type="search" class="w-full bg-color-white-2 outline-none text-color-9 text-base max-md:text-sm">
          <button class="px-2 hover:text-color-2 text-color-3">
            <span class="material-icons-sharp text-3xl max-md:text-xl">search</span>
          </button>
        </div>
      </form>
      <table class="w-full">
        <thead>
          <tr class="border-b border-color-light">
            <th class="p-card-padding max-lg:p-5 max-md:text-xs max-md:p-1 text-color-dark">STT</th>
            <th class="p-card-padding max-md:hidden text-color-dark">Hình ảnh</th>
            <th class="p-card-padding max-lg:p-5 max-md:text-xs max-md:p-2 text-color-dark">Tên sản phẩm</th>
            <th class="p-card-padding max-lg:p-5 max-md:text-xs max-md:p-2 text-color-dark">Giá</th>
            <th class="p-card-padding max-md:hidden text-color-dark">Vị trí</th>
            <th class="p-card-padding max-lg:p-5 max-md:text-xs max-md:p-2 text-color-dark">Trạng thái</th>
            <th class="p-card-padding max-lg:p-5 max-md:text-xs max-md:p-2 text-color-dark">Hành động</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in products">
            <td class="h-10 border-b border-color-light text-color-dark py-2 max-md:text-xs" >{{ index + 1 }}</td>
            <td class="border-b border-color-light text-color-dark flex justify-center items-center max-md:hidden">
              <img :src="item.image" alt="Image" class="w-20 h-20">
            </td>
            <td class="h-10 border-b border-color-light text-color-dark max-md:text-xs">{{ item.title }}</td>
            <td class="h-10 border-b border-color-light text-color-dark max-md:text-xs">{{ item.price }}</td>
            <td class="h-10 border-b border-color-light text-color-dark max-md:hidden">{{ item.position }}</td>
            <td class="h-10 border-b border-color-light text-color-dark">
              <button
                  :class="{'bg-color-primary': item.status == 'active',
                          'bg-color-danger' : item.status == 'inactive'
                  }"
                  class="px-4 py-1 text-color-white rounded-lg text-base font-semibold max-md:text-xs max-md:px-2">{{ item.status }}</button>
            </td>
            <td class="h-10 border-b border-color-light text-color-dark">
              <button class="px-5 font-semibold py-1 bg-color-13 text-color-white rounded-lg max-md:text-xs max-md:px-2">Sửa</button>
              <button class="px-5 font-semibold py-1 bg-color-2 ml-1 text-color-white rounded-lg max-md:text-xs max-md:px-2">Xóa</button>
            </td>
          </tr>
        </tbody>
    </table>
    </div>
  </div>
</template>

<script>
import {getProductList} from "@/service/productsService.js";

export default {
  data(){
    return{
      products : []
    }
  },
  async created(){
    try{
      const result = await getProductList();
      this.products = result.data.data
      console.log(result.data.data)
    }catch (err){
      console.log("Loi");
    }
  }
}
</script>
