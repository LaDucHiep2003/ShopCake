<script setup>
    import TableCart from "../Cart/TableCart.vue"
    import { useProduct } from '../../../stores/local';
import { ref } from "vue";
import { useRouter } from "vue-router";

    const store = useProduct();
    const router = useRouter()

    const delivery = ref({
        "first_name" : "",
        "last_name" : "",
        "company" : "",
        "address": "",
        "city" : "",
        "email" : "",
        "phone" : ""
    })

    const handleOrder = () =>{
        console.log({
            "delivery" : delivery.value,
            "product" : store.dataAll.data
        });

        router.replace({name : 'success'})
    }

</script>
<template>
    <div class="container mx-auto py-[100px]">
        <div class="grid grid-cols-2 gap-8">
            <div>
                <h3 class="text-4xl font-medium text-color-1 tracking-wider">BILLING ADDRESS</h3>
                <div class="my-8">
                    <div class="flex justify-between gap-3">
                        <input v-model="delivery.first_name" type="text" placeholder="First Name" class="w-full min-h-[60px] py-5 focus:outline-none border-b border-border-color-2 text-font-15">
                        <input v-model="delivery.last_name" type="text" placeholder="Last Name" class="w-full min-h-[60px] py-5 focus:outline-none border-b border-border-color-2 text-font-15">
                    </div>
                    <input v-model="delivery.company" type="text" placeholder="Company" class="my-5 w-full min-h-[60px] py-5 focus:outline-none border-b border-border-color-2 text-font-15">
                    <input v-model="delivery.address" type="text" placeholder="Address" class="my-5 w-full min-h-[60px] py-5 focus:outline-none border-b border-border-color-2 text-font-15">
                    <input v-model="delivery.city" type="text" placeholder="City/Town" class="my-5 w-full min-h-[60px] py-5 focus:outline-none border-b border-border-color-2 text-font-15">
                    <div class="flex justify-between gap-3">
                        <input v-model="delivery.email" type="text" placeholder="Email" class="w-full min-h-[60px] py-5 focus:outline-none border-b border-border-color-2 text-font-15">
                        <input v-model="delivery.phone" type="text" placeholder="Phone" class="w-full min-h-[60px] py-5 focus:outline-none border-b border-border-color-2 text-font-15">
                    </div>
                </div>
            </div>
            <div>
                <h3 class="text-4xl font-medium text-color-1 tracking-wider">DELIVERY ADDRESS</h3>
                <div class="my-8">
                    <div class="flex justify-between gap-3">
                        <input type="text" placeholder="First Name" class="w-full min-h-[60px] py-5 focus:outline-none border-b border-border-color-2 text-font-15">
                        <input type="text" placeholder="Last Name" class="w-full min-h-[60px] py-5 focus:outline-none border-b border-border-color-2 text-font-15">
                    </div>
                    <input type="text" placeholder="Company" class="my-5 w-full min-h-[60px] py-5 focus:outline-none border-b border-border-color-2 text-font-15">
                    <input type="text" placeholder="Address" class="my-5 w-full min-h-[60px] py-5 focus:outline-none border-b border-border-color-2 text-font-15">
                    <input type="text" placeholder="City/Town" class="my-5 w-full min-h-[60px] py-5 focus:outline-none border-b border-border-color-2 text-font-15">
                    <div class="flex justify-between gap-3">
                        <input type="text" placeholder="Email" class="w-full min-h-[60px] py-5 focus:outline-none border-b border-border-color-2 text-font-15">
                        <input type="text" placeholder="Phone" class="w-full min-h-[60px] py-5 focus:outline-none border-b border-border-color-2 text-font-15">
                    </div>
                </div>
            </div>
        </div>
        <label class="mt-8 capitalize relative text-left pl-8 text-font-15 tracking-wide text-color-9 cursor-pointer">
            <input type="checkbox" class="absolute left-0 top-[2px] rounded-[3px] cursor-pointer w-5 h-5">
            <span>My Billing Address And Shipping Address Are The Same</span>
        </label>

        <div class="mt-[80px]">
            <h3 class="text-4xl font-medium text-color-1 tracking-wider mb-[50px]">YOUR SHOPPING CART</h3>
            <TableCart />
        </div>

        <div class="grid grid-cols-2 gap-5 checkout mt-[100px]">
            <div>
                <h3 class="text-4xl font-medium text-color-1 tracking-wider">PAYMENT METHODS</h3>
                <div class="py-7 px-[26px] border border-border-color-2 mt-10">
                    <label class="mt-8 capitalize relative text-left pl-8 text-font-15 tracking-wide text-color-9 cursor-pointer flex items-center">
                        <input type="checkbox" class="absolute left-0 top-[2px] rounded-[3px] cursor-pointer w-5 h-5">
                        <span class="text-color-1 text-lg tracking-widest font-medium">DIRECT BANK TRANSFER</span>
                    </label>
                    <div class="details text-color-9 mt-1 h-0 max-h-0 opacity-0">
                        Make your payment directly into our bank account. Please use your 
                        Order ID as the payment reference. Your order will be shipped right away.
                    </div>
                </div>
            </div>
            <div>
                <h3 class="text-4xl font-medium text-color-1 tracking-wider">CART TOTAL</h3>
                <div class="border border-border-color-2 mt-10">
                    <div class="flex justify-between py-[22px] pl-6 pr-[50px] border-b border-border-color-2">
                        <div class="text-color-1 text-lg tracking-wider">CART SUBTOTAL</div>
                        <div class="text-color-1 text-lg tracking-wider">${{ store.dataAll.totalPrice }}</div>
                    </div>
                    <div class="flex justify-between py-[22px] pl-6 pr-[50px] border-b border-border-color-2">
                        <div class="text-color-1 text-lg tracking-wider">SHIPPING</div>
                        <div class="text-color-1 text-lg tracking-wider">FREE</div>
                    </div>
                    <div class="flex justify-between py-[22px] pl-6 pr-[50px] border-b border-border-color-2">
                        <div class="text-color-1 text-lg tracking-wider">TOTAL</div>
                        <div class="text-color-1 text-lg tracking-wider">${{ store.dataAll.totalPrice }}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-right mt-5">
            <button class="min-w-[190px] text-sm font-bold text-color-white py-5 px-[50px] bg-color-2 rounded-lg
                hover:bg-color-6" @click="handleOrder">ORDER NOW</button>
        </div>
    </div>
</template>