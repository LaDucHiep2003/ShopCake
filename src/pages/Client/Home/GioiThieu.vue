<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>


<template>
    <div class="bg-background-image-1 bg-cover bg-center pt-[100px] min-h-[33.59375vw]">
       <div class="container mx-auto">
            <p class="text-[100px] text-color-2 font-great">Delicious</p>
            <p class="text-[36px] text-color-1 tracking-spacing-1 font-bold">CAKES FOR YOU</p>
            <p class="text-color-4 text-2xl max-w-[480px] mt-5 tracking-widest">Sweet Bakery offers the best cakes and sweets for you.</p>
            <button class="text-sm font-bold text-color-white py-5 px-12 bg-color-2 rounded-lg hover:bg-color-6 mt-6">SHOP NOW</button>
        </div>
    </div>

    <div class="container mx-auto mt-[-30px]">
        <div class="bg-background-image-2 bg-cover bg-center pt-[100px] min-h-[33.59375vw] text-center border-[10px] border-border-color-1">
            <p class="text-[40px] text-color-2 font-great">Only Fresh Cakes</p>
            <div>
                <p class="max-w-[700px] text-lg text-color-4 mx-auto tracking-wider mt-4">All of our products are made from scratch using family recipes with only the highest quality 
                    ingredients. We bake and sell fresh daily to ensure only the best products are sold to our customers.</p>
            </div>
            <div class="mt-3">
                <RouterLink to="#" class="p-3 bg-color-2 rounded-radius-1 hover:bg-color-6">
                    <button>
                        <v-icon name="fa-arrow-right" class="h-6 w-auto text-color-white" />
                    </button>
                </RouterLink>
            </div>
        </div>
    </div>
</template>