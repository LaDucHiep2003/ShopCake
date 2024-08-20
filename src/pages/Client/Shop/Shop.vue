<script setup>
    import List from './List.vue';
    import ContentLeft from './ContentLeft.vue';
</script>

<template>
    <div class="container mx-auto py-10">
       <div class="flex justify-between gap-5">
            <div class="w-1/4">
                <ContentLeft />
            </div>
            
            
            <div class="flex-1">
                <List />
            </div>
        </div> 
    </div>
    
    

</template>