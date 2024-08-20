<script setup>
    import { computed, onMounted } from 'vue';
    import { RouterLink, useRoute, useRouter } from 'vue-router';
    import { ref } from 'vue'
    import { getCart } from '@/service/cartService';
    import { changeQuantity } from '../../../service/cartService';
    import { useInfoUser, useProduct } from '../../../stores/local';
    import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

    const active = ref(false)
    const cartId = localStorage.getItem("cartId")
    const store = useProduct();
    const storeUser = useInfoUser()
    const router = useRouter();

    const fetchApi = async ()=>{
        const result = await getCart(cartId)
        if(result){
            store.data = result['data']
            store.dataAll = result
        }
    }
    onMounted(fetchApi)
    

    const handleIncre = async (index) => {
        store.dataAll.data[index].quantity++;
        store.dataAll.data[index].totalPrice = store.dataAll.data[index].quantity * store.dataAll.data[index].price
        store.dataAll.totalPrice += store.dataAll.data[index].price;
        store.dataAll.quantity++;

        const result = await changeQuantity({
            "product_id" : store.dataAll.data[index].id,
            "quantity": store.dataAll.data[index].quantity,
            "cartId": cartId
        });
        if(result){
            console.log("ok");
        }
    };

    const handleDecre = async (index) => {
        if(store.dataAll.data[index].quantity > 0){
            store.dataAll.data[index].quantity--;
            store.dataAll.data[index].totalPrice = store.dataAll.data[index].quantity * store.dataAll.data[index].price
            store.dataAll.totalPrice -= store.dataAll.data[index].price;
            store.dataAll.quantity--;
        }
        else{
            store.dataAll.data[index].quantity = 0
            store.dataAll.data[index].totalPrice = 0;
        }
        const result = await changeQuantity({
            "product_id" : store.dataAll.data[index].id,
            "quantity": store.dataAll.data[index].quantity,
            "cartId": cartId
        });
        if(result){
            console.log("ok");
        }
    };
    const route = useRoute();
    const BreakCurmp = computed(() => {
        return route.name ? route.name.toUpperCase() : '';
    });
    const activeCard = () =>{
        active.value = !active.value;
    }

    const logout = () =>{
        localStorage.removeItem("tokenUser");
        store.useInfoUser = []
    }
</script>


<template>
    <header class="border-b border-[#ddd]">
        <div class="container mx-auto">
            <div class="flex justify-between items-center py-10">
                <div class="flex gap-2 items-center">
                    <Location class="h-12 w-auto text-color-2"/>
                    <div class="text-sm text-color-1 hover:text-color-2 font-lato tracking-wider">
                        <p>523 Sylvan Ave</p>
                        <p>Mountain View, CA 94041 USA</p>
                    </div>
                </div>
                <div>
                    <img src="@/assets/images/logo.png" alt="Logo">
                </div>
                <div class="flex items-center gap-2">
                    <div class="flex items-center gap-2 border-[2px] border-color-2  py-3 px-8  text-color-1 rounded-lg hover:bg-color-2 hover:text-color-white">
                        <Message class="h-5 w-auto"/>
                        <p class="text-xs font-bold tracking-wider">GET IN TOUCH</p>
                    </div>
                    <div class="text-right z-[10000]" v-if="storeUser.data.username" >
                        <Menu as="div" class="relative inline-block text-left">
                            <div>
                                <MenuButton
                                class="inline-flex w-full justify-between  cursor-pointer border-[2px] border-color-2 py-3 px-8 rounded-lg hover:bg-color-2 text-color-1 hover:text-color-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                                >
                                <p class="text-sm font-bold tracking-wider">Hi <span class="text-color-2">{{ storeUser.data.username }}</span></p>
                                <el-icon><ArrowDownBold class="text-color-2 text-xs"/></el-icon>
                                </MenuButton>
                            </div>

                            <transition
                                enter-active-class="transition duration-100 ease-out"
                                enter-from-class="transform scale-95 opacity-0"
                                enter-to-class="transform scale-100 opacity-100"
                                leave-active-class="transition duration-75 ease-in"
                                leave-from-class="transform scale-100 opacity-100"
                                leave-to-class="transform scale-95 opacity-0"
                            >
                                <MenuItems
                                class="absolute right-0 mt-2 w-full origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
                                >
                                <div>
                                    <MenuItem v-slot="{ active }">
                                    <button
                                        :class="[
                                        active ? 'bg-color-2 text-white' : 'text-gray-900',
                                        'group flex w-full items-center rounded-md p-3 text-sm font-semibold',
                                        ]"
                                        @click="logout"
                                    >
                                        Logout
                                    </button>
                                    </MenuItem>
                                </div>
                                </MenuItems>
                            </transition>
                        </Menu>
                    </div>
                    <RouterLink v-else :to="{ name : 'loginClient'}" class="border-[2px] border-color-2  py-3 px-8 text-color-1 rounded-lg hover:bg-color-2 hover:text-color-white">
                        <p class="text-xs font-bold tracking-wider">Login</p>
                    </RouterLink>
                </div>
            </div>
            
        </div>
    </header>

    <div class="sticky top-0 left-0 bg-color-white z-[1000] shadow-shadow-1">
        <div class="container mx-auto">
            <div class="flex justify-between items-center">
                <ul class="flex items-center justify-start text-color-1 text-sm font-semibold">
                    <li class="hover:text-color-2">
                        <RouterLink :to="{ name : 'Home'}" class="py-6 inline-block tracking-widest relative before:content-[''] before:absolute before:top-0 before:left-1/2 
                            before:h-2 before:w-[140%] before:transform before:-translate-x-1/2 
                            before:-translate-y-1/2 before:transition-all before:duration-200 before:ease-linear"
                            :class=" BreakCurmp === 'HOME' ? 'before:bg-color-2 before:w-full' : ''" 
                            >HOME </RouterLink>
                    </li>
                    <li class="ml-10 galleery-header">
                        <RouterLink :to="{ name: 'Gallery' }" class="py-6 inline-block tracking-widest relative before:content-[''] before:absolute before:top-0 before:left-1/2 
                            before:h-2 before:w-[140%] before:transform before:-translate-x-1/2 
                            before:-translate-y-1/2 before:transition-all before:duration-200 before:ease-linear before:hover:bg-color-2 before:hover:w-full"
                            :class=" BreakCurmp === 'GALLERY' ? 'before:bg-color-2 before:w-full' : ''"  
                            >
                        GALLERY </RouterLink>
                        <ul class="navbar absolute p-[30px] ml-[-30px] w-[250px] bg-color-white z-[5] text-left block opacity-0 invisible">
                            <li class="inline-block py-3">
                                <a href="#" class="text-sm text-color-4 leading-[1.2] font-medium py-3 tracking-wider">GRID GALLERY</a>
                            </li>
                            <li class="inline-block py-3">
                                <a href="#" class="text-sm text-color-4 leading-[1.2] font-medium py-3 tracking-wider">GRID GALLERY</a>
                            </li>
                            <li class="inline-block py-3">
                                <a href="#" class="text-sm text-color-4 leading-[1.2] font-medium py-3 tracking-wider">GRID GALLERY</a>
                            </li>
                            <li class="inline-block py-3">
                                <a href="#" class="text-sm text-color-4 leading-[1.2] font-medium py-3 tracking-wider">GRID GALLERY</a>
                            </li>
                        </ul>
                    </li>
                    <li class="ml-10 ">
                        <RouterLink :to="{ name: 'Shop' }" class="py-6 inline-block tracking-widest relative before:content-[''] before:absolute before:top-0 before:left-1/2 
                            before:h-2 before:w-[140%] before:transform before:-translate-x-1/2 
                            before:-translate-y-1/2 before:transition-all before:duration-200 before:ease-linear before:hover:bg-color-2 before:hover:w-full"
                            :class=" BreakCurmp === 'SHOP' ? 'before:bg-color-2 before:w-full' : ''" 
                            >
                        SHOP </RouterLink>
                    </li>
                    <li class="ml-10">
                        <RouterLink :to="{ name : 'blog'}" class="py-6 inline-block tracking-widest relative before:content-[''] before:absolute before:top-0 before:left-1/2 
                            before:h-2 before:w-[140%] before:transform before:-translate-x-1/2 
                            before:-translate-y-1/2 before:transition-all before:duration-200 before:ease-linear before:hover:bg-color-2 before:hover:w-full"
                            :class=" BreakCurmp === 'BLOG' ? 'before:bg-color-2 before:w-full' : ''" 
                            >
                        BLOG </RouterLink>
                    </li>
                    <li class="ml-10">
                        <RouterLink to="#" class="py-6 inline-block tracking-widest relative before:content-[''] before:absolute before:top-0 before:left-1/2 
                            before:h-2 before:w-[140%] before:transform before:-translate-x-1/2 
                            before:-translate-y-1/2 before:transition-all before:duration-200 before:ease-linear before:hover:bg-color-2 before:hover:w-full"
                            :class=" BreakCurmp === 'PAGES' ? 'before:bg-color-2 before:w-full' : ''" 
                            >PAGES </RouterLink>
                    </li>
                    <li class="ml-10">
                        <RouterLink to="#" class="py-6 inline-block tracking-widest relative before:content-[''] before:absolute before:top-0 before:left-1/2 
                            before:h-2 before:w-[140%] before:transform before:-translate-x-1/2 
                            before:-translate-y-1/2 before:transition-all before:duration-200 before:ease-linear before:hover:bg-color-2 before:hover:w-full">ELEMENTS </RouterLink>
                    </li>
                    <li class="ml-10">
                        <RouterLink to="#" class="py-6 inline-block tracking-widest">CONTACT US </RouterLink>
                    </li>
                </ul>
                <div>
                    <div class="flex gap-3 items-center">
                        <Search class="h-7 w-auto"/>
                        <div class="relative cursor-pointer">
                            <div class="flex items-start gap-1" @click="activeCard">
                                <ShoppingCart class="h-7 w-auto"/>
                                <p class="text-xs text-color-2 font-medium"> {{ store.dataAll.quantity }}</p>
                            </div>
                            <div :class="active ? 'active' : ''" class="cart-inline" >
                                <div class="p-5">
                                    <div class="text-lg font-semibold  text-color-1 tracking-wider ">IN CART: {{ store.dataAll.quantity }} PRODUCTS</div>
                                    <div class="text-base tracking-spacing-2 font-semibold text-color-1">TOTAL PRICE: ${{ store.dataAll.totalPrice }}</div>
                                </div>
                                <div class="flex items-center p-5 border-t border-border-color-2 gap-5" v-for="(item, index) in store.dataAll.data" :key="item.id">
                                    <img :src="item.image" alt="Image" class="w-[100px] h-[90px]">
                                    <div>
                                        <div class="text-base text-color-1 font-semibold">{{ item.title }}</div>
                                        <div class="flex items-center">
                                            <div class="flex items-center my-3">
                                                <span class="h-9 w-9 text-3xl bg-color-white border border-border-color-2 text-color-1 text-center rounded-md cursor-pointer" 
                                                     @click="handleDecre(index)">-</span>
                                                <input type="number" v-model="item.quantity" min="1" max="100" 
                                                    class="no-spinner text-xl text-color-1 rounded-md text-center focus:outline-none w-1/6">
                                                <span class="h-9 w-9 text-3xl bg-color-white border border-border-color-2 text-color-1 text-center rounded-md cursor-pointer" 
                                                    @click="handleIncre(index)">+</span>
                                            </div>
                                            <div class="text-base text-color-1 font-semibold">${{ item.price }}</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-5 flex justify-between border-t border-border-color-2">
                                    <RouterLink :to="{ name : 'cart'}">
                                        <button class=" text-sm font-bold text-color-1 py-[14px] px-[34px] border-2 border-color-1 rounded-md hover:border-color-2 hover:bg-color-2 hover:text-color-white">GO TO CARD</button>
                                    </RouterLink>
                                    <RouterLink :to="{ name : 'checkout'}">
                                        <button class=" text-sm font-bold text-color-white py-[14px] px-[34px] bg-color-2 rounded-lg hover:bg-color-6">CHECKOUT</button>
                                    </RouterLink>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>