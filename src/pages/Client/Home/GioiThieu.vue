
<template>
  <Splide
      :options="splideOptions"
      aria-label="New Products"
      class="overflow-hidden"
  >
    <SplideSlide>
      <div class="bg-background-image-1 bg-cover bg-center py-16 min-h-[33.59375vw]">
         <div class="container mx-auto">
              <p class="text-[100px] text-color-2 font-great max-lg:text-7xl max-md:text-5xl">Delicious</p>
              <p class="text-[36px] text-color-1 tracking-spacing-1 font-bold max-md:text-xl">CAKES FOR YOU</p>
              <p class="text-color-4 text-2xl max-w-[480px] mt-5 tracking-widest max-md:text-lg">Sweet Bakery offers the best cakes and sweets for you.</p>
              <button class="text-sm font-bold text-color-white py-5 px-12 bg-color-2 rounded-lg hover:bg-color-6 mt-6 max-lg:py-4 max-lg:px-11 tracking-wide max-md:py-3 max-md:px-5 max-md:text-xs">SHOP NOW</button>
          </div>
      </div>
    </SplideSlide>
    <SplideSlide v-for="item in dataBanner" :key="item.id">
      <div class="max-h-[500px] relative">
        <img :src="item.image_url" alt="">
        <div class="absolute right-0 top-1/3 bg-[#f1f1f1] py-1.5 px-2.5 w-5/12">
          <div class="flex flex-wrap -mx-2 justify-center">
            <div v-for="discount in dataDiscount" class="p-[5px] w-5/12">
              <div class="relative bg-white flex rounded-md min-h-[100px] h-full"
                   style="filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, .15));">
                <div class="discount">
                  <div class="flex flex-col justify-between py-2 pl-2 pr-2.5">
                    <div class="text-[#2d2d2d]">
                      <h3 class="uppercase text-sm font-bold mb-2">Nhập mã : {{ discount.code }}</h3>
                      <div class="text-[#727272] text-xs pb-2">{{ discount.description }}</div>
                    </div>
                    <div class="flex flex-wrap justify-between items-center">
                      <button class="py-1 px-4 rounded-full mb-1 text-white bg-[#cd3344] text-xs">Sao chép</button>
                      <div class="text-xs text-[#2E72D2] mb-1 cursor-pointer">Điều kiện</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SplideSlide>
  </Splide>
    <div class="container mx-auto mt-[-30px]">
        <div class="bg-background-image-2 bg-cover bg-center pt-16 pb-[185px] px-8 min-h-[33.59375vw] text-center border-[10px] border-border-color-1">
            <p class="text-[40px] text-color-2 font-great max-lg:text-3xl">Only Fresh Cakes</p>
            <div>
                <p class="max-w-[700px] text-lg text-color-4 mx-auto tracking-wider mt-4 max-lg:text-base">All of our products are made from scratch using family recipes with only the highest quality
                    ingredients. We bake and sell fresh daily to ensure only the best products are sold to our customers.</p>
            </div>
            <div class="mt-3 ">
                <RouterLink to="#" class="flex justify-center items-center">
                    <button class="p-2 bg-color-2 rounded-full hover:bg-color-6 max-lg:p-1 flex justify-center items-center">
                      <span class="material-icons-sharp text-white font-bold">arrow_forward</span>
                    </button>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { getBanners } from '@/service/BannerService.js';
import '@splidejs/vue-splide/css';
import {onMounted, ref} from "vue";
import {getDiscountList} from "@/service/DiscountsServive.js";
const splideOptions = {
  type: 'loop',
  perPage: 1,
  perMove: 1,
  gap: '1rem',
  pagination: true,
  arrows: false,
  autoplay: true,
  interval: 3000
};

const dataBanner = ref([]);
const dataDiscount = ref([]);

const loadBanner= async () =>{
  const result = await getBanners();
  if(result){
    dataBanner.value = result.data.data;
  }
}
const loadDiscounts= async () =>{
  const result = await getDiscountList(1);
  if(result){
    dataDiscount.value = result.data.data;
  }
}
onMounted(() =>{
  loadBanner();
  loadDiscounts();
})

</script>

<style scoped>
.discount:before{
  color : #fff;
  content: "";
  position: absolute;
  top: 0;
  left: -3px;
  height: 100%;
  width: 10px;
  background: repeating-linear-gradient(#e5e5e5, #e5e5e5 5px, transparent 0, transparent 9px, #e5e5e5 0, #e5e5e5 10px) 0 / 1px 100% no-repeat, radial-gradient(circle at 0 7px, transparent, transparent 2px, #e5e5e5ee 0, #e5e5e5 3px, currentColor 0) 1px 0 / 100% 10px repeat-y;
}
</style>
