import { defineStore } from 'pinia';
import { ref } from 'vue';


export const useProduct = defineStore('product', ()=> {
    const data = ref([])
    const dataAll = ref([])

    return { data , dataAll} ;
});

export const useUserStore = defineStore('userStore', {
    state: () => ({
        user: null,
    }),
    actions: {
        setUser(userData) {
            this.user = userData;
        },
    },
});