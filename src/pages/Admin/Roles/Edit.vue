<template>
    
    <div class="mx-auto container">
        <div class="text-[50px] text-color-2 font-great text-center max-md:text-3xl">
            Chỉnh sửa nhóm quyền
        </div>
        <el-form
            class="w-full p-3 responsive-form"
            :model="sizeForm"
            label-width="auto"
            size="large"
        >
        <el-form-item label="Title">
            <el-input v-model="sizeForm.title" />
        </el-form-item>
        <el-form-item label="Description">
            <el-input v-model="sizeForm.description" type="textarea" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">Cập nhật</el-button>
            <el-button>Hủy</el-button>
        </el-form-item>
        </el-form>
    </div>
  </template>
  
<script>
    import { useRoute} from 'vue-router';
    export default{
        data(){
            return{
                products : [],
                sizeForm: {
                    title: '',
                    description: '',
                }
            };
        },
        created() {
            const route = useRoute();
            const id = route.params.id;
            fetch(`http://localhost/php/shop_online/be/api/roles/detail.php?id=${id}`)
            .then((response) => response.json())
            .then((data) => this.sizeForm = data)
        },
        methods:{
            onSubmit(){
                const id = this.$route.params.id;
                fetch(`http://localhost/php/shop_online/be/api/roles/update.php?id=${id}`,{
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(this.sizeForm)
                })
                    .then(response => response.json());
                this.$router.push({name : 'role'})
            }
        }
    }


</script>

  