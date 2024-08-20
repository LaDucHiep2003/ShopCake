<script lang="ts">
    import { defineComponent, onMounted, PropType, ref } from 'vue';
    import { RouterLink } from 'vue-router';
    import { userInfo } from '../../../service/accountService';
    import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
    import { ChevronUpIcon } from '@heroicons/vue/20/solid'

    export default defineComponent({
    props: {
        isSidebarOpen: {
        type: Boolean as PropType<boolean>,
        required: true,
        },
    },
    components : {
        Disclosure,
        DisclosureButton, 
        DisclosurePanel,
        ChevronUpIcon
    },
    setup() {
        const data = ref<any>({ permissions: [] });
        
        const fetAPi = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            const result = await userInfo({ token });
            data.value = result;
        }
        };
        const checkPermissions = (permission: string) => {
        if (data.value.permissions.includes(permission)) {
            return true;
        }
        return false;
        };

        onMounted(() => {
        fetAPi();
        });

        return {
        data,
        checkPermissions
        };
    },
    });

</script>

<template>
    <div class="fixed left-0 top-0 w-64 h-full bg-gray-900 p-4 z-50 sidebar-menu transition-transform" :class="{ '-translate-x-full': isSidebarOpen }">
        <a href="#" class="flex items-center pb-4 border-b border-b-gray-800">
            <img src="https://placehold.co/32x32" alt="" class="w-8 h-8 rounded object-cover">
            <span class="text-lg font-bold text-white ml-3">Admin</span>
        </a>
        <ul class="mt-4">
            
            <li class="mb-1 group active">
                <RouterLink :to="{ name : 'dashboard'}" class="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100">
                    <i class="ri-home-2-line mr-3 text-lg"></i>
                    <span class="text-sm">Dashboard</span>
                </RouterLink>
            </li>
            <!-- <li class="mb-1 group">
                <a href="#" class="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100 sidebar-dropdown-toggle">
                    <i class="ri-instance-line mr-3 text-lg"></i>
                    <span class="text-sm">Orders</span>
                    <i class="ri-arrow-right-s-line ml-auto group-[.selected]:rotate-90"></i>
                </a>
                <ul class="pl-7 mt-2 hidden group-[.selected]:block">
                    <li class="mb-4">
                        <a href="#" class="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Active order</a>
                    </li> 
                    <li class="mb-4">
                        <a href="#" class="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Completed order</a>
                    </li> 
                    <li class="mb-4">
                        <a href="#" class="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Canceled order</a>
                    </li> 
                </ul>
            </li> -->
            <!-- <li class="mb-1 group">
                <a href="#" class="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100 sidebar-dropdown-toggle">
                    <i class="ri-flashlight-line mr-3 text-lg"></i>
                    <span class="text-sm">Services</span>
                    <i class="ri-arrow-right-s-line ml-auto group-[.selected]:rotate-90"></i>
                </a>
                <ul class="pl-7 mt-2 hidden group-[.selected]:block">
                    <li class="mb-4">
                        <a href="#" class="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Manage services</a>
                    </li>
                </ul>
            </li> -->
            <li class="mb-1 group" v-if="checkPermissions('product')">
                <div class="w-full ">
                    <div class="mx-auto w-full">
                    <Disclosure v-slot="{ open }">
                        <DisclosureButton
                            class="flex w-full justify-between items-center hover:bg-gray-950 hover:text-gray-100 rounded-md py-2 px-4"
                            >
                            <Routerlink :to="{ name : 'product'}" class="flex items-center text-gray-300  group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100 sidebar-dropdown-toggle">
                                <i class="ri-instance-line mr-3 text-lg"></i>
                                <span class="text-sm">Product</span>
                            </Routerlink>
                            <ChevronUpIcon
                                :class="open ? 'rotate-180 transform' : 'rotate-90 transform'"
                                class="h-5 w-5 text-color-5"
                            />
                        </DisclosureButton>
                        <DisclosurePanel>
                        
                        <ul class="pl-7 mt-2 group-[.selected]:block">
                    <li class="mb-4" v-if="checkPermissions('product_view')">
                        <RouterLink :to="{ name : 'product'}" class="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Danh sách sản phẩm</RouterLink>
                    </li> 
                    <li class="mb-4" v-if="checkPermissions('product_create')">
                        <RouterLink :to="{name : 'create'}" class="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Thêm sản phẩm</RouterLink>
                    </li> 
                    <li class="mb-4">
                        <RouterLink :to="{ name : 'deleted-product'}" class="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Sản phẩm đã xóa</RouterLink>
                    </li> 
                </ul>
                        
                        </DisclosurePanel>
                    </Disclosure>
                    
                    </div>
                </div>
            </li>
            <li class="mb-1 group" v-if="checkPermissions('category')">
                <div class="w-full ">
                    <div class="mx-auto w-full">
                    <Disclosure v-slot="{ open }">
                        <DisclosureButton
                            class="flex w-full justify-between items-center hover:bg-gray-950 hover:text-gray-100 rounded-md py-2 px-4"
                            >
                            <a href="#" class="flex items-center text-gray-300 group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100 sidebar-dropdown-toggle">
                                <i class="ri-instance-line mr-3 text-lg"></i>
                                <span class="text-sm">Category</span>
                            </a>
                            <ChevronUpIcon
                                :class="open ? 'rotate-180 transform' : 'rotate-90 transform'"
                                class="h-5 w-5 text-color-5"
                            />
                        </DisclosureButton>
                        <DisclosurePanel>
                            <ul class="pl-7 mt-2 group-[.selected]:block">
                                <li class="mb-4" v-if="checkPermissions('category_view')">
                                    <RouterLink :to="{ name : 'category'}" class="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Danh sách danh mục</RouterLink>
                                </li> 
                                <li class="mb-4" v-if="checkPermissions('category_create')">
                                    <RouterLink :to="{name : 'create-category'}" class="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Thêm danh mục</RouterLink>
                                </li> 
                                <li class="mb-4">
                                    <a href="#" class="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Canceled order</a>
                                </li> 
                            </ul>
                        </DisclosurePanel>
                    </Disclosure>
                    </div>
                </div>
            </li>
            <li class="mb-1 group" v-if="checkPermissions('account')">
                <div class="w-full ">
                    <div class="mx-auto w-full">
                    <Disclosure v-slot="{ open }">
                        <DisclosureButton
                            class="flex w-full justify-between items-center hover:bg-gray-950 hover:text-gray-100 rounded-md py-2 px-4"
                            >
                            <Routerlink :to="{ name : 'product'}" class="flex items-center text-gray-300 group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100 sidebar-dropdown-toggle">
                                <i class="ri-instance-line mr-3 text-lg"></i>
                                <span class="text-sm">Account</span>
                            </Routerlink> 
                            <ChevronUpIcon
                                :class="open ? 'rotate-180 transform' : 'rotate-90 transform'"
                                class="h-5 w-5 text-color-5"
                            />
                        </DisclosureButton>
                        <DisclosurePanel>
                            <ul class="pl-7 mt-2 group-[.selected]:block">
                                <li class="mb-4" v-if="checkPermissions('account_view')">
                                    <RouterLink :to="{ name : 'accounts'}" class="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Danh sách tài khoản</RouterLink>
                                </li> 
                                <li class="mb-4" v-if="checkPermissions('account_create')">
                                    <RouterLink :to="{name : 'create-accounts'}" class="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Thêm tài khoản</RouterLink>
                                </li> 
                                <li class="mb-4">
                                    <a href="#" class="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Canceled order</a>
                                </li> 
                            </ul>
                        </DisclosurePanel>
                    </Disclosure>
                    </div>
                </div>
            </li>
            <li class="mb-1 group" v-if="checkPermissions('role')">
                <div class="w-full ">
                    <div class="mx-auto w-full">
                    <Disclosure v-slot="{ open }">
                        <DisclosureButton
                            class="flex w-full justify-between items-center hover:bg-gray-950 hover:text-gray-100 rounded-md py-2 px-4"
                            >
                            <a href="#" class="flex items-center text-gray-300 group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100 sidebar-dropdown-toggle">
                                <i class="ri-instance-line mr-3 text-lg"></i>
                                <span class="text-sm">Role</span>
                            </a>
                            <ChevronUpIcon
                                :class="open ? 'rotate-180 transform' : 'rotate-90 transform'"
                                class="h-5 w-5 text-color-5"
                            />
                        </DisclosureButton>
                        <DisclosurePanel>
                            <ul class="pl-7 mt-2 group-[.selected]:block">
                                <li class="mb-4" v-if="checkPermissions('role_view')">
                                    <RouterLink :to="{ name : 'role'}" class="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Danh sách nhóm quyền</RouterLink>
                                </li> 
                                <li class="mb-4" v-if="checkPermissions('role_create')">
                                    <RouterLink :to="{name : 'create-role'}" class="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Thêm nhóm quyền</RouterLink>
                                </li> 
                                <li class="mb-4">
                                    <a href="#" class="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Canceled order</a>
                                </li> 
                            </ul>
                        </DisclosurePanel>
                    </Disclosure>
                    </div>
                </div>
            </li>
            <li class="mb-1 group" v-if="checkPermissions('permissions')">
                <RouterLink :to="{ name : 'permissions'}" class="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100">
                    <i class="ri-settings-2-line mr-3 text-lg"></i>
                    <span class="text-sm">Phân quyền</span>
                </RouterLink>
            </li>
            <li class="mb-1 group" >
                <a href="#" class="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100">
                    <i class="ri-settings-2-line mr-3 text-lg"></i>
                    <span class="text-sm">Settings</span>
                </a>
            </li>

        </ul>
    </div>
    <div class="fixed top-0 left-0 w-full h-full bg-black/50 z-40 md:hidden sidebar-overlay" :class="{ hidden: !isSidebarOpen }"></div>
</template>