<template>
  <div class="w-[700px] h-[650px] max-md:h-full bg-white p-4 rounded-2xl transition-all duration-300 ease-in-out overflow-y-auto"
       style="scrollbar-width: none;">
    <div class=" flex justify-between items-center gap-2 mb-5">
      <div class="focus:outline-none border border-color-2 w-full py-2 px-4
          rounded-lg text-xl font-medium text-color-3">
        Mã đơn hàng : {{ dataOrderDetail.orders.order_info.id }}
      </div>
      <svg @click="handleDetail" class="cursor-pointer" width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 5L5 15M5 5L15 15" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <div class="w-full py-2 px-4 rounded-lg text-xl font-medium text-color-2 flex gap-2 items-center">
      First Name : <div class="text-color-1 w-2/3">{{ dataOrderDetail.orders.order_info.first_name }}</div>
    </div>
    <div class="w-full py-2 px-4 rounded-lg text-xl font-medium text-color-2 flex gap-2 items-center">
      Last Name : <div class="text-color-1 w-2/3">{{ dataOrderDetail.orders.order_info.last_name }}</div>
    </div>
    <div class="w-full py-2 px-4 rounded-lg text-xl font-medium text-color-2 flex gap-2 items-center">
      Address : <div class="text-color-1 w-2/3">{{ dataOrderDetail.orders.order_info.address }}</div>
    </div>
    <div class="w-full py-2 px-4 rounded-lg text-xl font-medium text-color-2 flex gap-2 items-center">
      Phone : <div class="text-color-1 w-2/3">{{ dataOrderDetail.orders.order_info.phone }}</div>
    </div>
    <div>
      <div v-for="item in dataOrderDetail.orders.order_items">
        <article class="relative text-center px-4 pt-5 pb-10 max-w-[300px] mx-auto z-10 h-auto">
          <div class="transition-all duration-200 ease-in-out">
            <div class="min-h-[200px] flex items-end justify-center">
              <img :src="item.image" :alt="item.title" class="w-[152px] h-[160px]" />
            </div>
            <div class="font-medium text-lg text-color-1 mt-5">
              <div>{{ item.title }}</div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    handleDetail:{
      type : Function,
      required : true
    },
    dataOrderDetail:{
      type : Object
    }
  }
}
</script>