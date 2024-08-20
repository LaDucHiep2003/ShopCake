<script setup>
    import { onMounted, ref } from 'vue'
    import { getCart } from '@/service/cartService';
    import { changeQuantity, deleteProduct } from '../../../service/cartService';
    import { useProduct } from '../../../stores/local';

    const cartId = localStorage.getItem("cartId")
    const store = useProduct();

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

    const handleDelete = (id,index) =>{
        const fetchApi = async () => {
            const result = await deleteProduct({
                'product_id' : id
            });
            if(result){
                store.dataAll.data.splice(index, 1);
            }
        }
        fetchApi();
    }
</script>

<template>
    <table class="w-full max-w-full bg-color-white border-collapse text-center uppercase border border-border-color-2">
        <thead>
            <tr class="border border-border-color-2">
                <td class="pl-8 pr-6 text-left text-lg py-5 bg-color-white font-medium text-color-4">PRODUCT NAME</td>
                <td class=" text-lg py-5 bg-color-white font-medium text-color-4 px-6">PRICE</td>
                <td class=" text-lg py-5 bg-color-white font-medium text-color-4 px-6">QUANTITY</td>
                <td class=" text-lg py-5 bg-color-white font-medium text-color-4 px-6">TOTAL</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in store.dataAll.data">
                <td class="max-w-[500px] w-1/2 pt-7 pl-8 pr-[14px] pb-3">
                    <div class="flex items-center">
                        <a href="#" class="max-w-[146px] w-full inline-block text-center bg-color-10 ">
                            <img :src="item.image" alt="Image">
                        </a>
                        <a href="#" class="ml-8 tracking-wider font-semibold text-2xl text-color-1">{{ item.title }}</a>
                    </div>
                </td>
                <td class="w-[13%] min-w-[100px] px-[14px] pt-7 pb-3 text-2xl text-color-1 tracking-spacing-2">
                    ${{ item.price }}
                </td>
                <td class="pt-7 pb-3 tracking-spacing-2">
                    <div class="flex justify-center items-center">
                        <span class="h-9 w-9 text-3xl bg-color-white border border-border-color-2 text-color-1 right-[-15px] text-center 
                            rounded-md cursor-pointer" @click="handleDecre(index)">-</span>
                        <input type="number" v-model="item.quantity" min="1" max="100"
                            class="no-spinner text-xl text-color-1 rounded-md text-center focus:outline-none w-1/6">
                        <span class="h-9 w-9 text-3xl bg-color-white border border-border-color-2 text-color-1 right-[-15px] text-center 
                            rounded-md cursor-pointer" @click="handleIncre(index)">+</span>
                    </div>
                </td>
                <td class="w-[13%] min-w-[100px] px-[14px] pt-7 pb-3 text-2xl text-color-1 tracking-spacing-2">${{ item.totalPrice }}</td>
                <td class="pt-3">
                    <div class="bg-color-white px-[14px] py-2 border-2 border-color-2 rounded-lg text-color-1 font-semibold
                         hover:bg-color-2 hover:text-color-white cursor-pointer" @click="handleDelete(item.id,index)">Delete</div>
                </td>
            </tr>
            
        </tbody>
    </table>
    <div class="flex justify-between items-center py-8">
        <div class="flex items-center gap-5">
            <div class="min-w-[185px] grow inline-block text-font-15 tracking-wider text-color-4 font-lato ml-4">
                <input type="text" placeholder="Code" class="min-h-[70px] py-[22px] rounded-md px-[25px] focus:outline-none border border-border-color-2">
            </div>
            
            <button class="min-w-[190px] min-h-[70px] text-sm font-bold text-color-white py-6 px-[50px] bg-color-2 rounded-lg hover:bg-color-6">APPLY</button>
        </div>
        <div class="flex items-center gap-8">
            <div class="text-lg text-color-9 font-medium tracking-wider ">Total</div>
            <div class="text-4xl text-color-1 tracking-wider ">${{ store.dataAll.totalPrice }}</div>
            <RouterLink :to="{ name : 'checkout'}">
                <button class="min-w-[190px] text-sm font-bold text-color-white py-5 px-[50px] bg-color-2 rounded-lg hover:bg-color-6">CHECKOUT</button>
            </RouterLink>
        </div>
    </div>
</template>