

<template>
    <div class="container mx-auto">
      <TableCart />
      <div class="flex justify-between items-center py-8">
        <div class="flex items-center gap-5">
          <div class="min-w-[185px] grow inline-block text-font-15 tracking-wider text-color-4 font-lato">
            <input type="text" placeholder="Code" class="min-h-[70px] py-[22px] rounded-md px-[25px] focus:outline-none border border-border-color-2">
          </div>

          <button class="min-w-[190px] min-h-[70px] text-sm font-bold text-color-white py-6 px-[50px] bg-color-2 rounded-lg hover:bg-color-6">APPLY</button>
        </div>
        <div class="flex items-center gap-8">
          <div class="text-lg text-color-9 font-medium tracking-wider ">Total</div>
          <div class="text-4xl text-color-1 tracking-wider ">{{ formatPrice(store.dataAll.totalPrice) }} VND</div>
          <RouterLink :to="{ name : 'checkout'}">
            <button class="min-w-[190px] text-sm font-bold text-color-white py-5 px-[50px] bg-color-2 rounded-lg hover:bg-color-6">CHECKOUT</button>
          </RouterLink>
        </div>
      </div>
    </div>
</template>
<script setup>
import TableCart from './TableCart.vue';
import {useProduct} from "@/stores/local.js";
const store = useProduct();
const formatPrice = (price) => {
  return new Intl.NumberFormat('vi-VN').format(price);
};
</script>