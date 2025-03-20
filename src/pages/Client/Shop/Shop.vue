<template>
  <div class="container mx-auto py-10">
    <div class="flex justify-between gap-5">
      <div class="w-1/4 max-lg:hidden">
        <ContentLeft
            :minPrice="minPrice"
            :maxPrice="maxPrice"
            @updatePriceRange="updatePriceRange"
            @updateSearchQuery="updateSearchQuery"/>
      </div>
      <div class="flex-1">
        <List
            :filteredProducts="filteredProducts"
            :totalPage="totalPage"
            :currentPage="currentPage"
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

export default {
  components: {
    List,
    ContentLeft,
  },
  data() {
    return {
      products: [],
      filteredProducts: [],
      minPrice: 0,
      maxPrice: 100,
      searchQuery: "",
      currentPage: 1,
      totalPage: 2,
      totalProduct: 0,
      limit: 9,
    };
  },
  methods: {
    async loadProducts(page = 1) {
      try {
        const result = await getProductList(page);
        if (result) {
          console.log(result)
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
  },
  async created() {
    await this.loadProducts();
  },
};
</script>
