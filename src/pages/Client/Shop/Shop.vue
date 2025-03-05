

<template>
    <div class="container mx-auto py-10">
       <div class="flex justify-between gap-5">
            <div class="w-1/4">
                <ContentLeft :minPrice="minPrice" :maxPrice="maxPrice" :filteredProducts="filteredProducts" />
            </div>
            <div class="flex-1">
                <List :products="filteredProducts" />
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
      filteredProducts: [], // Danh sách sản phẩm sau khi lọc
      minPrice: 0,  // Giá thấp nhất
      maxPrice: 50, // Giá cao nhất (tuỳ chỉnh theo dữ liệu)
    };
  },
  methods: {
    // Tải danh sách sản phẩm từ API
    async loadProducts() {
      try {
        const result = await getProductList();
        this.products = result.data.data;
        this.filterByPrice(); // Lọc sản phẩm sau khi tải
      } catch (err) {
        console.log("Lỗi khi lấy danh sách sản phẩm");
      }
    },
    filterByPrice() {
      this.filteredProducts = this.products.filter(product =>
          product.price >= this.minPrice && product.price <= this.maxPrice
      );
    },
  },
  watch: {
    minPrice() {
      this.filterByPrice();
    },
    maxPrice() {
      this.filterByPrice();
    },
  },
  async created() {
    await this.loadProducts();
  },
};
</script>
