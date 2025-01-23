<template>
  <div class="grid w-[96%] my-0 mx-auto gap-7 grid-cols-grid-template-col max-lg:grid-cols-grid-template-col-lg max-md:w-full">
    <Sidebar :toggleSidebar="toggleSidebar" :openSidebar="openSidebar" />
    <main class="mt-5 max-md:mt-[8rem] py-0 px-4">
      <slot />
    </main>
    <Header :toggleSidebar="toggleSidebar" :toggleLightMode="toggleLightMode" />
  </div>
</template>
<script>
import Header from '@/components/partials/Admin/Header.vue';
import Sidebar from '@/components/partials/Admin/Sidebar.vue';
  export default {
    data(){
      return{
        openSidebar : false,
        light : true
      }
    },
    components:{
      Header,
      Sidebar
    },
    watch: {
      light(newVal) {
        if (newVal) {
          document.body.classList.add("dark-theme-variables");
        } else {
          document.body.classList.remove("dark-theme-variables");
        }
      },
    },
    methods : {
      toggleSidebar() {
        this.openSidebar = !this.openSidebar;
      },
      toggleLightMode() {
        this.light = !this.light;
      },
    }
  }
</script>