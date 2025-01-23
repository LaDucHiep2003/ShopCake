<template>
  <aside :class="{
      'max-md:hidden': !openSidebar,
      'max-md:block': openSidebar,
      'max-md:fixed max-md:left-[-100%] max-md:bg-white max-md:w-[18rem] max-md:z-[3] max-md:shadow-shadow-3 max-md:pr-card-padding': true
    }">
    <div class="flex item-center justify-between mt-6">
      <div class="flex gap-3 max-md:ml-4 ">
        <img src="@/assets/images/logo.png" alt="Logo" class="w-8 h-8">
        <div class="text-lg font-bold max-lg:hidden max-md:inline">EGA<span>TOR</span></div>
      </div>
      <div @click="toggleSidebar" class="hidden max-md:inline-block cursor-pointer">
        <span class="material-icons-sharp">close</span>
      </div>
    </div>
    <div class="flex flex-col h-[86vh] relative top-12 sidebar">
      <RouterLink to="/admin/dashboard" class="flex gap-4 items-center relative h-14 transition-all duration-300 text-color-info-dark
              ease-in-out ml-8 hover:text-color-primary max-lg:w-[5.6rem] max-md:w-full max-md:h-14" :class="{ active: $route.path === '/admin/dashboard' }">
            <span class="material-icons-sharp text-xl transition-all duration-300 ease-out">
              grid_view
            </span>
        <h3 class="text-sm max-lg:hidden max-md:inline">DashBoard</h3>
      </RouterLink>
      <RouterLink to="/admin/product" class="flex gap-4 items-center relative h-14 transition-all duration-300 text-color-info-dark
              ease-in-out ml-8 hover:text-color-primary max-lg:w-[5.6rem] max-md:w-full max-md:h-14" :class="{ active: $route.path === '/admin/product' }">
        <span class="material-icons-sharp text-xl transition-all duration-300 ease-out">inventory</span>
        <h3 class="text-sm max-lg:hidden max-md:inline">Sản phẩm</h3>
      </RouterLink>
      <RouterLink to="/" class="flex text-color-info-dark ml-8 gap-4 items-center h-14 transition-all duration-300
              ease-in-out absolute bottom-8 w-full hover:text-color-primary max-md:absolute max-md:bottom-[5rem]">
        <span class="material-icons-sharp text-xl transition-all duration-300 ease-out">logout</span>
        <h3 class="text-sm max-lg:hidden max-lg:relative max-md:inline">Logout</h3>
      </RouterLink>
    </div>
  </aside>
</template>

<script>
export default {
  props:{
    toggleSidebar :{
      type : Function,
      required : true
    },
    openSidebar:{
      type : Boolean,
      required : true
    }
  }
}
</script>