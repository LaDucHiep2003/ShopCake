
<template>
  <h1 class="text-2xl font-bold text-color-dark max-md:text-xl max-lg:text-center">Đơn hàng</h1>
  <div class="mt-8 md:container max-md:px-2 mx-auto product">
    <RouterLink :to="{ name : 'order-confirmed'}">
      <button class="px-5 font-semibold py-2 bg-color-13 text-sm text-color-white rounded-lg max-md:px-3">Đơn hàng đã xác nhận</button>
    </RouterLink>
    <div class="bg-color-white-2 mt-10 rounded-lg max-md:rounded-lg text-center shadow-shadow-5 transition-all duration-300
      ease-in-out hover:shadow-none max-md:px-2">
      <div class="py-5 pl-3 max-lg:py-3 max-md:pl-1">
        <div class="h-10 relative border pl-3 border-color-light w-1/2 rounded-lg flex justify-between items-center max-md:h-8">
          <input v-model="searchQuery" @input="searchOrders" placeholder="Nhập từ khóa..." type="search" class="w-full bg-color-white-2 outline-none text-color-9 text-base max-md:text-xs">
          <button class="px-2 hover:text-color-2 text-color-3">
            <span class="material-icons-sharp text-3xl max-md:text-xl">search</span>
          </button>
        </div>
      </div>
      <div class="overflow-x-auto w-full max-md:my-0 max-md:mx-auto">
        <table class="w-full border-collapse min-w-[600px]">
          <thead>
          <tr class="border-b border-color-light">
            <th class="p-card-padding max-lg:p-5 max-md:text-xs max-md:p-1 text-color-dark whitespace-nowrap">STT</th>
            <th class="p-card-padding max-lg:p-5 max-md:text-xs max-md:p-1 text-color-dark whitespace-nowrap">Họ tên</th>
            <th class="p-card-padding max-lg:p-5 max-md:text-xs max-md:p-2 text-color-dark whitespace-nowrap">Số điện thoại</th>
            <th class="p-card-padding max-lg:p-5 max-md:text-xs max-md:p-2 text-color-dark whitespace-nowrap">Địa chỉ</th>
            <th class="p-card-padding max-lg:p-5 max-md:text-xs max-md:p-1 text-color-dark whitespace-nowrap">Tổng số lượng</th>
            <th class="p-card-padding max-lg:p-5 max-md:text-xs max-md:p-2 text-color-dark whitespace-nowrap">Tổng tiền</th>
            <th class="p-card-padding max-lg:p-5 max-md:text-xs max-md:p-2 text-color-dark whitespace-nowrap">Trạng thái</th>
            <th class="p-card-padding max-lg:p-5 max-md:text-xs max-md:p-2 text-color-dark whitespace-nowrap">Hành động</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(item,index) in orders">
            <td class="h-10 border-b border-color-light text-color-dark max-md:text-xs whitespace-nowrap" >{{ index + 1 }}</td>
            <td @click="handleDetail(item.id)" class="h-10 border-b border-color-light text-color-dark max-md:text-xs whitespace-nowrap cursor-pointer">{{ item.first_name }} {{ item.last_name }}</td>
            <td class="h-10 border-b border-color-light text-color-dark max-md:text-xs whitespace-nowrap">{{ item.phone }}</td>
            <td class="h-10 border-b border-color-light text-color-dark max-md:text-xs whitespace-nowrap">{{ item.address }}</td>
            <td class="h-10 border-b border-color-light text-color-dark max-md:text-xs whitespace-nowrap">{{ item.totalQuantity }}</td>
            <td class="h-10 border-b border-color-light text-color-dark max-md:text-xs whitespace-nowrap">{{ item.totalPrice }}</td>
            <td class="h-10 border-b border-color-light text-color-dark">
              <button
                  :class="{'bg-color-primary': item.confirm,
                            'bg-color-danger' : !item.confirm
                    }"
                  class="px-2 py-1 text-color-white rounded-lg text-sm font-semibold max-md:text-xs max-md:px-2" v-text="item.confirm ? 'Đã xác nhận' : 'Chưa xác nhận'"></button>
            </td>
            <td class="h-10 border-b border-color-light text-color-dark whitespace-nowrap">
              <button @click="handleConfirm(item.id)" class="px-2 font-semibold py-1 bg-color-13 text-color-white rounded-lg max-md:text-xs max-md:px-2
                  whitespace-nowrap">Xác nhận</button>
              <button @click="handleDelete(item.id)" class="px-2 font-semibold py-1 bg-color-2 ml-1 text-color-white rounded-lg max-md:text-xs max-md:px-2 whitespace-nowrap">Xóa</button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <div
      v-if="openOrderDetail"
      :class="{
    'opacity-100 scale-100 pointer-events-auto': openOrderDetail,
    'opacity-0 scale-95 pointer-events-none': !openOrderDetail,
  }"
      class="fixed top-0 left-0 z-[101] right-0 bottom-0 flex justify-center items-center transition-all duration-300 ease-in-out transform"
      style="background: rgba(0, 0, 0, 0.5)"
  >
    <div class="w-[700px] h-[650px] max-md:h-full bg-white p-4 rounded-2xl transition-all duration-300 ease-in-out overflow-y-auto"
         style="scrollbar-width: none;">
      <div class=" flex justify-between items-center gap-2 mb-5">
        <div class="focus:outline-none border border-color-2 w-full py-2 px-4
          rounded-lg text-xl font-medium text-color-3">
          Mã đơn hàng : {{ dataOrderDetail.orders.order_info.id || "N/A" }}
        </div>
        <svg @click="handleDetail" class="cursor-pointer" width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 5L5 15M5 5L15 15" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="w-full py-2 px-4 rounded-lg text-xl font-medium text-color-2 flex gap-2 items-center">
        <div class="flex-1">First Name :</div> <div class="text-color-1 w-2/3">{{ dataOrderDetail.orders.order_info.first_name }}</div>
      </div>
      <div class="w-full py-2 px-4 rounded-lg text-xl font-medium text-color-2 flex gap-2 items-center">
        <div class="flex-1">Last Name :</div>  <div class="text-color-1 w-2/3">{{ dataOrderDetail.orders.order_info.last_name }}</div>
      </div>
      <div class="w-full py-2 px-4 rounded-lg text-xl font-medium text-color-2 flex gap-2 items-center">
        <div class="flex-1">Address :</div>  <div class="text-color-1 w-2/3">{{ dataOrderDetail.orders.order_info.address }}</div>
      </div>
      <div class="w-full py-2 px-4 rounded-lg text-xl font-medium text-color-2 flex gap-2 items-center">
        <div class="flex-1"> Phone : </div><div class="text-color-1 w-2/3">{{ dataOrderDetail.orders.order_info.phone }}</div>
      </div>
      <div class="w-full py-2 px-4 rounded-lg text-xl font-medium text-color-2 flex gap-2 items-center">
        <div class="flex-1"> Products : </div>
      </div>
      <div>
        <div v-for="item in dataOrderDetail.orders.order_items" class="flex gap-2 flex-wrap">
          <article class="relative text-center max-w-[300px] mx-auto z-10 h-auto border border-color-2">
            <div class="transition-all duration-200 ease-in-out">
              <div class="min-h-[150px] flex items-end justify-center">
                <img :src="item.image" :alt="item.title" class="w-[120px] h-[140px]" />
              </div>
              <div class="font-medium text-lg text-color-1 mt-2">
                <div>{{ item.title }}</div>
              </div>
              <div class="font-medium text-lg text-color-1 mt-2">
                <div>Số lượng : {{ item.quantity }}</div>
              </div>
              <div class="font-medium text-lg text-color-1 mt-2">
                <div>Tổng tiền : {{ item.quantity }}</div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ElNotification } from 'element-plus';
import {confirmOrder, deleteOrder, getCheckout, getOrderList} from "@/service/orderService.js";
import OrderDetail from "@/pages/Admin/Order/OrderDetail.vue";

export default {
  data(){
    return{
      orders : [],
      searchQuery: "",
      allOrders: [],
      openOrderDetail : false,
      dataOrderDetail : {}
    }
  },
  components:{
    OrderDetail
  },
  methods:{
    async handleDelete (id){
      const result = await deleteOrder(id)
      if(result){
        ElNotification({
          title: 'Success',
          message: 'Xóa thành công đơn hàng',
          type: 'success',
        })
        await this.loadOrders();
      }
    },
    async loadOrders() {
      try {
        const result = await getOrderList();
        this.orders = result.data;
        this.allOrders = result.data;
        console.log(result)
      } catch (err) {
        console.log("Lỗi");
      }
    },
    searchOrders() {
      if (!this.searchQuery) {
        this.orders = this.allOrders; // Nếu không có từ khóa, hiển thị danh sách gốc
      } else {
        this.orders = this.allOrders.filter((order) =>
            order.first_name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
    },
    async handleConfirm(id){
      const result = await confirmOrder({
        "id" : id
      });
      if(result){
        await this.loadOrders();
      }
    },
    async handleDetail(id){
      this.openOrderDetail = !this.openOrderDetail;
      const result = await getCheckout(id);
      if(result){
        this.dataOrderDetail = result;
        console.log(result)
      }
    },
  },
  async created(){
    await this.loadOrders();
  }
}
</script>
