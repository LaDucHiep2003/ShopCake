<template>
  <div class="container mx-auto py-10">
    <div class="flex justify-between gap-5">
      <div class="w-1/4 max-lg:hidden">
        <ContentLeft
            :minPrice="minPrice"
            :maxPrice="maxPrice"
            @updatePriceRange="updatePriceRange"
            @updateSearchQuery="updateSearchQuery"
            :ListCategory="ListCategory"
            :TotalCategory="TotalCategory"
            @updateCategoryFilter="updateCategoryFilter"
        />
      </div>
      <div class="flex-1">
        <List
            :filteredProducts="filteredProducts"
            :totalPage="totalPage"
            :currentPage="currentPage"
            :totalProduct="totalProduct"
            :limit="limit"
            @page-change="handlePageChange"
        />
      </div>
    </div>
  </div>
</template>

<script>
import List from "@/pages/Client/Shop/List.vue";
import ContentLeft from "@/pages/Client/Shop/ContentLeft.vue";
import { getProductList } from "@/service/productsService.js";
import {getCategoryList} from "@/service/categoryService.js";

export default {
  components: {
    List,
    ContentLeft,
  },
  data() {
    return {
      products: [],
      ListCategory : [],
      TotalCategory: 0,
      filteredProducts: [],
      minPrice: 0,
      maxPrice: 1000000,
      searchQuery: "",
      currentPage: 1,
      totalPage: 2,
      totalProduct: 0,
      limit: 9,
      selectedCategories : [],
    };
  },
  methods: {
    async loadProducts(page = 1) {
      try {
        const result = await getProductList(page);
        if (result) {
          this.products = result.data.data;
          this.filteredProducts = [...this.products];
          this.totalPage = result.data.total_page;
          this.totalProduct = result.data.record_total;
          this.limit = result.data.limit;
          this.currentPage = page;
        }
      } catch (err) {
        console.error("Lỗi khi lấy danh sách sản phẩm", err);
      }
    },
    async loadCategory(){
      const result = await getCategoryList();
      if(result){
        this.ListCategory = result.data.data;
        this.TotalCategory = result.data.record_total;
      }
    },
    filterProducts() {
      this.filteredProducts = this.products.filter(product =>
          product.price >= this.minPrice &&
          product.price <= this.maxPrice &&
          (this.searchQuery === "" || product.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
      );
    },
    updatePriceRange({ minPrice, maxPrice }) {
      this.minPrice = minPrice;
      this.maxPrice = maxPrice;
      this.filterProducts();
    },
    updateSearchQuery(query) {
      this.searchQuery = query;
      this.filterProducts();
    },
    handlePageChange(page) {
      this.loadProducts(page);
    },
    updateCategoryFilter (categories){
      this.selectedCategories = categories;
    }
  },
  async created() {
    await this.loadProducts();
    await this.loadCategory();
  },
};
</script>
