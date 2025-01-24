<template>
  <Header :toggleSidebar="toggleSidebar" :toggleLightMode="toggleLightMode" />
  <Sidebar :toggleSidebar="toggleSidebar" :openSidebar="openSidebar" />
  <main class="mt-5 max-md:mt-[8rem] py-0 px-4 w-[calc(100%-14rem)] max-lg:w-[calc(100%-7rem)] md:ml-64">
    <slot />
  </main>
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