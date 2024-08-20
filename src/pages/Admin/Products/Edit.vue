<template>
    
    <div class="mx-auto container bg-color-white"> 
        <div class="text-[50px] text-color-2 font-great text-center">
            Chỉnh sửa sản phẩm
        </div>
        <el-form
            class="w-full p-3"
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
        <el-form-item label="Giá">
            <el-input v-model.number="sizeForm.price" />
        </el-form-item>
        <el-form-item label="Giá cũ">
            <el-input v-model.number="sizeForm.oldPrice" />
        </el-form-item>
        <el-form-item label="Ảnh">
            <el-input v-model="sizeForm.image" />
        </el-form-item>
        <el-form-item label="Vị trí">
            <el-input v-model.number="sizeForm.position" />
        </el-form-item>
        <el-form-item label="Status">
            <el-radio-group v-model="sizeForm.status">
            <el-radio border value="active">Hoạt động</el-radio>
            <el-radio border value="inactive">Dừng hoạt động</el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">Update</el-button>
            <el-button>Cancel</el-button>
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
                    image: '',
                    price: 0,
                    status: '',
                    position: '',
                    oldPrice: ''
                }
            };
        },
        created() {
            const route = useRoute();
            const id = route.params.id;
            fetch(`http://localhost/php/shop_online/be/api/products/detail.php?id=${id}`)
            .then((response) => response.json())
            .then((data) => this.sizeForm = data)
        },
        methods:{
            onSubmit(){
                const id = this.$route.params.id;
                fetch(`http://localhost/php/shop_online/be/api/products/update.php?id=${id}`,{
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(this.sizeForm)
                })
                    .then(response => response.json());
                this.$router.push({name : 'product'})
            }
        }
    }


</script>

  