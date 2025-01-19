<template>
  <div class="grid w-[96%] my-0 mx-auto gap-7 grid-cols-grid-template-col max-lg:grid-cols-grid-template-col-lg max-md:w-full">
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
          <span class="material-icons-sharp">
            close
          </span>
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
    <main class="mt-5 max-md:mt-[8rem] py-0 px-4">

      <slot />
      <div class="mt-8">
        <h2 class="mb-3">Recent order</h2>
        <table class="bg-color-white w-full rounded-card-border-radius p-5 text-center shadow-shadow-5 transition-all duration-300 ease-in-out hover:shadow-none">
          <thead>
          <tr>
            <th>Product name</th>
            <th>Product number</th>
            <th>Product number</th>
            <th>Product number</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td class="h-10 border-b border-color-light text-color-dark ">HAhhs</td>
            <td class="h-10 border-b border-color-light text-color-dark ">ssk</td>
            <td class="h-10 border-b border-color-light text-color-dark ">nnss</td>
            <td class="h-10 border-b border-color-light text-color-dark ">nnsn</td>
          </tr>
          <tr>
            <td class="h-10 border-b border-color-light text-color-dark ">HAhhs</td>
            <td class="h-10 border-b border-color-light text-color-dark ">ssk</td>
            <td class="h-10 border-b border-color-light text-color-dark ">nnss</td>
            <td class="h-10 border-b border-color-light text-color-dark ">nnsn</td>
          </tr>
          </tbody>
        </table>
        <div>Show all</div>
      </div>
    </main>
    <div class="mt-6 max-md:w-[94%] max-md:mt-0 max-md:mx-auto max-md:mb-[4rem]">
      <div class="flex justify-end gap-8 max-md:fixed max-md:top-0 max-md:left-0 max-md:items-center max-md:py-0 max-md:px-3
          max-md:h-[4.6rem] max-md:bg-white max-md:w-full m-0 z-[2] max-md:shadow-shadow-4">
        <button @click="toggleSidebar" class="hidden max-md:inline-block max-md:bg-transparent max-md:cursor-pointer max-md:text-color-dark max-md:absolute
            max-md:left-4">
          <span class="material-icons-sharp">
            menu
            </span>
        </button>
        <div @click="toggleLightMode" class="bg-color-light flex justify-between items-center h-6 w-16 cursor-pointer rounded-border-radius-1 max-md:w-[4.4rem]
            max-md:absolute max-md:left-2/3">
          <span class="material-icons-sharp text-base w-1/2 h-full flex justify-center items-center bg-color-primary text-white rounded-border-radius-1">light_mode</span>
          <span class="material-icons-sharp text-base w-1/2 h-full flex justify-center items-center">dark_mode</span>
        </div>
        <div class="flex gap-8 text-right ">
          <div class="max-md:hidden">
            <p>Hey, <b>Hiep</b></p>
            <small>Admin</small>
          </div>
          <div class="h-8 w-8">
            <img src="@/assets/images/profile-1.jpg" alt="Profile" class="rounded-full">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        openSidebar : false,
        light : true
      }
    },
    watch: {
      light(newVal) {
        if (newVal) {
          // Nếu light là true, thêm class vào body
          document.body.classList.add("dark-theme-variables");
        } else {
          // Nếu light là false, xóa class khỏi body
          document.body.classList.remove("dark-theme-variables");
        }
      },
    },
    methods : {
      toggleSidebar() {
        this.openSidebar = !this.openSidebar;
      },
      toggleLightMode() {
        // Đảo ngược trạng thái light
        this.light = !this.light;
      },
    }
  }
</script>