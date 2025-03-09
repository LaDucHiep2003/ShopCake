
<template>
    <GioiThieu />
    <Offer />
    <Products />
    <ChooseUs />
    <Sale />
    <div @click="handleChatbot" class="flex gap-2 cursor-pointer items-center bg-white p-1 rounded-tl-full rounded-bl-full fixed bottom-40 right-0 shadow-sd-1">
      <div class="h-11 w-11 rounded-full bg-linear-gradient-1 flex justify-center items-center">
        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M2.1665 10.0126C2.1665 5.62268 5.67484 1.66675 10.5165 1.66675C15.2498 1.66675 18.8332 5.54757 18.8332 9.98756C18.8332 15.137 14.6332 18.3334 10.4998 18.3334C9.13317 18.3334 7.6165 17.9662 6.39984 17.2485C5.97484 16.9897 5.6165 16.7978 5.15817 16.948L3.47484 17.4488C3.04984 17.5823 2.6665 17.2485 2.7915 16.7978L3.34984 14.9283C3.4415 14.6696 3.42484 14.3942 3.2915 14.1772C2.57484 12.8585 2.1665 11.4147 2.1665 10.0126ZM9.4165 10.0126C9.4165 10.6052 9.8915 11.0809 10.4832 11.0892C11.0748 11.0892 11.5498 10.6052 11.5498 10.0209C11.5498 9.42839 11.0748 8.95268 10.4832 8.95268C9.89984 8.94433 9.4165 9.42839 9.4165 10.0126ZM13.2582 10.0209C13.2582 10.6052 13.7332 11.0892 14.3248 11.0892C14.9165 11.0892 15.3915 10.6052 15.3915 10.0209C15.3915 9.42839 14.9165 8.95268 14.3248 8.95268C13.7332 8.95268 13.2582 9.42839 13.2582 10.0209ZM6.6415 11.0892C6.05817 11.0892 5.57484 10.6052 5.57484 10.0209C5.57484 9.42839 6.04984 8.95268 6.6415 8.95268C7.23317 8.95268 7.70817 9.42839 7.70817 10.0209C7.70817 10.6052 7.23317 11.0809 6.6415 11.0892Z" fill="white"/>
        </svg>
      </div>
      <div class="text-base font-semibold text-color-4">Trợ lý AI</div>
    </div>
  <div
      :class="{
      'opacity-100 scale-100 pointer-events-auto': openChatbot,
      'opacity-0 scale-95 pointer-events-none': !openChatbot,
  }"
      class="fixed bottom-0 right-0 transition-all duration-300 ease-in-out transform rounded-tr-2xl rounded-tl-2xl"
  >
    <ChatBot :handleChatbot="handleChatbot" />
  </div>
</template>

<script>
import GioiThieu from './GioiThieu.vue';
import Offer from './Offer.vue';
import Products from './Products.vue';
import ChooseUs from './ChooseUs.vue';
import Sale from './Sale.vue';
import ChatBot from "@/pages/Client/Home/ChatBot.vue";

export default {
  data(){
    return{
      openChatbot : false
    }
  },
  components:{
    GioiThieu,
    Offer,
    Products,
    ChooseUs,
    Sale,
    ChatBot
  },
  methods:{
    handleChatbot(){
      this.openChatbot = !this.openChatbot;
    },
  }
}
</script>
