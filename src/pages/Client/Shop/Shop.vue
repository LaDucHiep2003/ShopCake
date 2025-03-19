

<template>
    <div class="container mx-auto py-10">
       <div class="flex justify-between gap-5">
            <div class="w-1/4">
                <ContentLeft
                    :minPrice="minPrice"
                    :maxPrice="maxPrice"
                    @updatePriceRange="updatePriceRange"
                    @updateSearchQuery="updateSearchQuery"/>
            </div>
            <div class="flex-1">
                <List :filteredProducts="filteredProducts" />
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
      searchQuery: ""
    };
  },
  methods: {
    async loadProducts() {
      try {
        const result = await getProductList();
        if(result){
          console.log(result)
          this.products = result.data.data;
          this.filteredProducts = result.data.data;
          this.filteredProducts();
        }

      } catch (err) {
        console.log("Lỗi khi lấy danh sách sản phẩm");
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
    }
  },
  async created() {
    await this.loadProducts();
  },
};
</script>
