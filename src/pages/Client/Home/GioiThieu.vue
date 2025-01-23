
<template>
    <div class="bg-background-image-1 bg-cover bg-center py-16 min-h-[33.59375vw] delicious">
       <div class="container mx-auto">
            <p class="text-[100px] text-color-2 font-great max-lg:text-7xl max-md:text-5xl">Delicious</p>
            <p class="text-[36px] text-color-1 tracking-spacing-1 font-bold max-md:text-xl">CAKES FOR YOU</p>
            <p class="text-color-4 text-2xl max-w-[480px] mt-5 tracking-widest max-md:text-lg">Sweet Bakery offers the best cakes and sweets for you.</p>
            <button class="text-sm font-bold text-color-white py-5 px-12 bg-color-2 rounded-lg hover:bg-color-6 mt-6 max-lg:py-4 max-lg:px-11 tracking-wide max-md:py-3 max-md:px-5 max-md:text-xs">SHOP NOW</button>
        </div>
    </div>
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

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>
