import { defineStore } from 'pinia';
import { ref } from 'vue';


export const useProduct = defineStore('product', ()=> {
    const data = ref([])
    const dataAll = ref([])

    return { data , dataAll} ;
});

export const useInfoUser = defineStore('info', ()=> {
    const data = ref([])

    return { data } ;
});