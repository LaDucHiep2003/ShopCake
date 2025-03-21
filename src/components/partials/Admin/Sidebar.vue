<template>
  <aside :class="{
      'max-md:hidden': !openSidebar,
      'max-md:block': openSidebar,
      'fixed top-0 left-0 md:pl-5 w-[14rem] max-md:left-[-100%] max-md:bg-color-background max-md:w-[18rem] max-md:z-20 max-md:shadow-shadow-3 max-md:pr-card-padding': true
    }">
    <div class="flex item-center justify-between mt-6">
      <div class="flex gap-3 max-md:ml-4 ">
        <img src="@/assets/images/logo.png" alt="Logo" class="w-8 h-8">
        <div class="text-lg font-bold max-lg:hidden max-md:inline text-color-dark">EGA<span>TOR</span></div>
      </div>
      <div @click="toggleSidebar" class="hidden max-md:inline-block cursor-pointer text-color-dark">
        <span class="material-icons-sharp">close</span>
      </div>
    </div>
    <div class="flex flex-col h-[86vh] relative top-12 sidebar">
      <RouterLink to="/admin/dashboard" class="flex gap-4 items-center relative h-14 transition-all duration-300 text-color-info-dark
              ease-in-out ml-8 hover:text-color-primary max-lg:w-[5.6rem] max-md:w-full max-md:h-14" :class="{ active: $route.path === '/admin/dashboard' }">
            <span class="material-icons-sharp text-2xl transition-all duration-300 ease-out">
              grid_view
            </span>
        <h3 class="text-sm max-lg:hidden max-md:inline">Tổng quan</h3>
      </RouterLink>
      <RouterLink v-if="hasPermission('product_view')" to="/admin/product" class="flex gap-4 items-center relative h-14 transition-all duration-300 text-color-info-dark
              ease-in-out ml-8 hover:text-color-primary max-lg:w-[5.6rem] max-md:w-full max-md:h-14" :class="{ active: $route.name === 'product' || $route.name === 'create-product' || $route.name === 'edit-product'}">
        <span class="material-icons-sharp text-2xl transition-all duration-300 ease-out">inventory</span>
        <h3 class="text-sm max-lg:hidden max-md:inline">Sản phẩm</h3>
      </RouterLink>
      <RouterLink v-if="hasPermission('category_view')" to="/admin/category" class="flex gap-4 items-center relative h-14 transition-all duration-300 text-color-info-dark
              ease-in-out ml-8 hover:text-color-primary max-lg:w-[5.6rem] max-md:w-full max-md:h-14"
                  :class="{ active: $route.name === 'category'|| $route.name === 'create-category' || $route.name === 'edit-category'}">
        <span class="material-icons-sharp text-2xl transition-all duration-300 ease-out">category</span>
        <h3 class="text-sm max-lg:hidden max-md:inline">Danh mục</h3>
      </RouterLink>
      <RouterLink v-if="hasPermission('blog_view')" to="/admin/blog" class="flex gap-4 items-center relative h-14 transition-all duration-300 text-color-info-dark
              ease-in-out ml-8 hover:text-color-primary max-lg:w-[5.6rem] max-md:w-full max-md:h-14"
                  :class="{ active: $route.name === 'blog'}">
        <span class="material-icons-sharp text-2xl transition-all duration-300 ease-out">library_books</span>
        <h3 class="text-sm max-lg:hidden max-md:inline">Bài viết</h3>
      </RouterLink>
      <RouterLink v-if="hasPermission('order_view')" :to="{ name : 'order'}" class="flex gap-4 items-center relative h-14 transition-all duration-300 text-color-info-dark
              ease-in-out ml-8 hover:text-color-primary max-lg:w-[5.6rem] max-md:w-full max-md:h-14"
                  :class="{ active: $route.name === 'order' || $route.name === 'order-confirmed'}">
        <span class="material-icons-sharp text-2xl transition-all duration-300 ease-out">list_alt</span>
        <h3 class="text-sm max-lg:hidden max-md:inline">Đơn hàng</h3>
      </RouterLink>
      <RouterLink v-if="hasPermission('role_view')" :to="{ name : 'roles'}" class="flex gap-4 items-center relative h-14 transition-all duration-300 text-color-info-dark
              ease-in-out ml-8 hover:text-color-primary max-lg:w-[5.6rem] max-md:w-full max-md:h-14"
                  :class="{ active: $route.name === 'roles' || $route.name === 'create-role' || $route.name === 'edit-role' }">
        <span class="material-icons-sharp text-2xl transition-all duration-300 ease-out">account_tree</span>
        <h3 class="text-sm max-lg:hidden max-md:inline">Nhóm quyền</h3>
      </RouterLink>
      <RouterLink v-if="hasPermission('permissions')" :to="{ name : 'permissions'}" class="flex gap-4 items-center relative h-14 transition-all duration-300 text-color-info-dark
              ease-in-out ml-8 hover:text-color-primary max-lg:w-[5.6rem] max-md:w-full max-md:h-14"
                  :class="{ active: $route.name === 'permissions' }">
        <span class="material-icons-sharp text-2xl transition-all duration-300 ease-out">add_task</span>
        <h3 class="text-sm max-lg:hidden max-md:inline">Phân quyền</h3>
      </RouterLink>
      <RouterLink v-if="hasPermission('account_view')" :to="{ name : 'accounts'}" class="flex gap-4 items-center relative h-14 transition-all duration-300 text-color-info-dark
              ease-in-out ml-8 hover:text-color-primary max-lg:w-[5.6rem] max-md:w-full max-md:h-14"
                  :class="{ active: $route.name === 'accounts' || $route.name === 'create-accounts' || $route.name === 'edit-accounts' }">
        <span class="material-icons-sharp text-2xl transition-all duration-300 ease-out">manage_accounts</span>
        <h3 class="text-sm max-lg:hidden max-md:inline">Tài khoản</h3>
      </RouterLink>
      <RouterLink :to="{ name : 'permissions'}" class="flex gap-4 items-center relative h-14 transition-all duration-300 text-color-info-dark
              ease-in-out ml-8 hover:text-color-primary max-lg:w-[5.6rem] max-md:w-full max-md:h-14"
                  :class="{ active: $route.name === 'Home' }">
        <span class="material-icons-sharp text-2xl transition-all duration-300 ease-out">settings</span>
        <h3 class="text-sm max-lg:hidden max-md:inline">Cài đặt</h3>
      </RouterLink>
      <RouterLink to="/" class="flex text-color-info-dark ml-8 gap-4 items-center h-14 transition-all duration-300
              ease-in-out absolute bottom-8 w-full hover:text-color-primary max-md:absolute max-md:bottom-[5rem]">
        <span class="material-icons-sharp text-2xl transition-all duration-300 ease-out">logout</span>
        <h3 class="text-sm max-lg:hidden max-lg:relative max-md:inline">Logout</h3>
      </RouterLink>
    </div>
  </aside>
</template>

<script>
export default {
  data(){
    return{
      user : null,
      permissions : []
    }
  },
  methods:{
    async loadUser(){
      const userData = localStorage.getItem("user");
      if (userData) {
        const parsedUser = JSON.parse(userData);
        this.user = parsedUser;

        // Chuyển permissions từ chuỗi thành mảng
        if (parsedUser.permissions) {
          this.permissions = parsedUser.permissions.split(",");
        }
      }
    },
    hasPermission(permission){
      return this.permissions.includes(permission);
    }
  },
  props:{
    toggleSidebar :{
      type : Function,
      required : true
    },
    openSidebar:{
      type : Boolean,
      required : true
    }
  },
  async created(){
    await this.loadUser();
  }
}
</script>