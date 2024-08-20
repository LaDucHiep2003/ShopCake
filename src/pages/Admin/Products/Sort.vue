<template>
    <div class="m-4">
      <el-select
        v-model="selected"
        value-key="id"
        placeholder="Sắp xếp"
        style="width: 240px"
      >
        <el-option
          v-for="item in filter"
          :key="item.id"
          :label="item.label"
          :value="item"
        />
      </el-select>
    </div>
  </template>
  
<script setup lang="ts">
    import { computed, ref } from 'vue'
    
    type Option = {
        id: number
        label: string
        desc: string
    }
    const value = ref<Option>()
    const selected = ref('');
    const label = ref(['Tiêu đề giảm dần','Tiêu đề tăng dần'])
    const options = ref([
        { id: 1, label: 'Tiêu đề giảm dần', desc: ' Tiêu đề giảm dần' },
        { id: 2, label: 'Tiêu đề tăng dần', desc: ' Tiêu đề tăng dần' },
        { id: 3, label: 'Giá giảm dần', desc: ' Giá giảm dần' },
        { id: 4, label: 'Giá tăng dần', desc: ' Giá tăng dần' },
        { id: 5, label: 'Vị trí tăng dần', desc: ' Giá tăng dần' },
        { id: 6, label: 'Vị trí tăng dần', desc: ' Giá tăng dần' },
    ])

    const filter = computed(() =>{
      if(!selected.value){
        return options.value;
      }
        return options.value.filter(item => item.label === selected.value)
    }  
    ) 
    
    

    const handleChange = () =>{
      console.log("ok")
    }
</script>
  