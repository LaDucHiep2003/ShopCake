<script setup lang="ts">
    import TableProducts from './TableProducts.vue';
    import Filter from './Filter.vue';
    import { RouterView } from 'vue-router';
    import { onMounted, ref } from 'vue';
    import { userInfo } from '@/service/accountService';

    const data = ref<{ permissions: string[] }>({ permissions: [] });

    const fetAPi = async () => {
    const token = localStorage.getItem('token');
    if (token) {
        const result = await userInfo({ token });
        data.value = result;
    }
    };

    const checkPermissions = (permission: string) => {
    return data.value.permissions.includes(permission);
    };

    onMounted(() => {
        fetAPi();
    });
</script>


<template>
    <div v-if="checkPermissions('product')" class="p-10 mx-auto">
        <Filter />
        <TableProducts />
        <RouterView />
    </div>
    
</template>