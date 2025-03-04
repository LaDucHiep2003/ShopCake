

<template>
    <div class="container mx-auto py-10">
       <div class="flex justify-between gap-5">
            <div class="w-1/4">
                <ContentLeft />
            </div>
            <div class="flex-1">
                <List :products="products" />
            </div>
        </div> 
    </div>
</template>
<script>
import {getProductList} from "@/service/productsService.js";
import {List} from "@/pages/Client/Shop/List.vue";
import { ContentLeft} from "./ContentLeft.vue";

export default {
  components:{
    List,
    ContentLeft
  },
  data(){
    return {
      products : []
    }
  },
  methods:{
    async loadProducts() {
      try {
        const result = await getProductList();
        this.products = result.data.data;
      } catch (err) {
        console.log("Lỗi khi lấy danh sách sản phẩm");
      }
    },
  },
  async created(){
    await this.loadProducts();
  }
}
</script>