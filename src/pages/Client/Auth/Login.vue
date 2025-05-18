
<template>
    <div class="text-color-white h-[100vh] flex justify-center items-center bg-contain bg-background-image-7">
        <div class="bg-slate-900 border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
            <h1 class="text-4xl text-color-white font-bold text-center mb-6">Login</h1>
            <div class="relative my-5">
                <input v-model="data.email" type="email" class="block w-72 py-2 px-0 text-sm text-color-white bg-transparent border-0 border-b-2 
                    border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-color-white focus:border-blue-600 peer ">
                <label for="" class="absolute text-base text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                    peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                    peer-focus:scale-75 peer-focus:translate-y-6">Your Mail</label>
            </div>
            <div class="relative my-5">
                <input v-model="data.password" type="password" class="block w-72 py-2 px-0 text-sm text-color-white bg-transparent border-0 border-b-2 
                    border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-color-white focus:border-blue-600 peer">
                <label for="" class="absolute text-base text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                    peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                    peer-focus:scale-75 peer-focus:translate-y-6">Your Password</label>
            </div>
            <div class="flex justify-between items-center">
                <div class="flex gap-2 items-center">
                    <input type="checkbox" name="" id="">
                    <label for="Remember Me" class="text-sm">Remember Me</label>
                </div>
                <RouterLink :to="{name : 'forgot-password'}" class="text-sm text-blue-500">Forgot Password?</RouterLink>
            </div>
            <button @click="handleSubmit" class="w-full mb-4 text-lg mt-6 rounded-full bg-color-white text-emerald-800 hover:bg-emerald-600 hover:text-color-white py-2 transition-colors duration-300">Login</button>
            <div class="mt-4">
                <span class="text-sm">New Here? <RouterLink :to="{ name : 'register'}" class="text-blue-500"> Create a Account</RouterLink></span>
            </div>
        </div>
    </div>
</template>


<script>
import { login } from '@/service/auth.js';
import Cookies from 'js-cookie';
import {useUserStore} from "@/stores/local.js";
import {updateCard} from "@/service/cartService.js";

export default {
  data() {
    return {
      data: {
        email: "",
        password: "",
      },
    };
  },

  methods: {
    async handleSubmit() {
      const { email, password } = this.data;
      if (!email || !password) {
        alert("Vui lòng nhập đầy đủ email và mật khẩu.");
        return;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Email không đúng định dạng.");
        return;
      }
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
      if (!passwordRegex.test(password)) {
        alert(
            "Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ thường, chữ in hoa, chữ số và ký tự đặc biệt."
        );
        return;
      }
      try {
        const result = await login(this.data);
        if (result.message === "success") {
          Cookies.set("token", result.jwt);
          await this.getUser(result.jwt);
          this.$router.push({ name: 'Home' });
        } else {
          alert('Tài khoản không đúng hoặc sai mật khẩu');
        }
        console.log(this.data)
      } catch (error) {
        console.error('Đã xảy ra lỗi:', error);
        alert('Đã xảy ra lỗi, vui lòng thử lại.');
      }
    },
    async getUser(token){
      try {
        const response = await fetch('http://localhost:3000/getUser', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (response.ok) {
          const data = await response.json();
          const cartId = localStorage.getItem("cartId");
          const result = await updateCard({
            user_id : data.user.id,
            id : cartId
          })
          localStorage.setItem("cartId",result)
          const userStore = useUserStore();
          userStore.setUser(data.user);
        } else {
          const error = await response.json();
        }
      } catch (error) {
        console.error('Lỗi:', error);
      }
    }
  },
};
</script>

