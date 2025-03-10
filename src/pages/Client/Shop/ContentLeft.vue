
<template>
    <div class="filter-shop">
        <p class="text-base text-color-1 font-semibold tracking-spacing-2 pb-4 border-b border-border-color-2">FILTER BY PRICE</p>
        <div class="slider-demo-block">
            <el-slider v-model="value" range  :max="200"/>
        </div>
        <div class="flex justify-between items-center">
            <button @click="handleFilter" class="text-sm font-bold text-color-white py-3 px-7 bg-color-2 rounded-lg hover:bg-color-6">FILTER</button>
            <div class="flex justify-center gap-3 text-[15px] text-color-1 tracking-wider">Price: <p>{{ value[0] }}</p>- <p>{{ value[1] }}</p></div>
        </div>
        <p class="text-base text-color-1 font-semibold tracking-spacing-2 pb-4 border-b border-border-color-2 mt-10">CATEGORIES</p>
        <div class="flex justify-between items-center text-[15px] text-color-4">
            <el-checkbox label="AII" size="large" class="w-[20px] h-[20px]"/>
            <div class="tracking-widest">(18)</div>
        </div>
        <div class="bg-color-8 flex min-h-16 items-center rounded-lg my-6">
            <input v-model="searchQuery"
                   @input="handleSearch"
                   type="text"
                   placeholder="Search in shop"
                   class="focus:outline-none w-full bg-color-8 py-4 pl-6 pr-14">
            <button class="h-14 w-14 px-1">
                <Search class="h-7 w-auto"/>
            </button>
        </div>
        <div>
           <p class="text-base text-color-1 font-semibold tracking-spacing-2 pb-4 border-b border-border-color-2 mt-10">POPULAR PRODUCTS</p>
            <div class="flex gap-3 items-center py-5">
                <div>
                    <img src="https://res.cloudinary.com/dsxkwbfyq/image/upload/v1722505868/product-mini-1-106x104_v2rorc.png" alt="Image" class="w-full bg-color-10">
                </div>
                <div class="text-[15px]">
                    <div class="text-color-1 tracking-wider">Chocolate Pudding</div>
                    <div class="text-color-2">$25.00</div>
                </div>

            </div>
            <div class="flex gap-3 items-center py-5">
                <div>
                    <img src="https://res.cloudinary.com/dsxkwbfyq/image/upload/v1722505868/product-mini-1-106x104_v2rorc.png" alt="Image" class="w-full bg-color-10">
                </div>
                <div class="text-[15px]">
                    <div class="text-color-1 tracking-wider">Chocolate Pudding</div>
                    <div class="text-color-2">$25.00</div>
                </div>
            </div> 
        </div>

    </div>
    
</template>

<script>
export default {
  props: {
    maxPrice: Number,
    minPrice: Number
  },
  data() {
    return {
      value: [this.minPrice, this.maxPrice],
      searchQuery: ""
    };
  },
  methods: {
    handleFilter() {
      this.$emit("updatePriceRange", { minPrice: this.value[0], maxPrice: this.value[1] });
    },
    handleSearch() {
      this.$emit("updateSearchQuery", this.searchQuery); // Gửi từ khóa tìm kiếm lên component cha
    }
  }
};
</script>


