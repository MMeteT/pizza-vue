
<script>
import { usePizzaStore } from '../stores/pizza.js'
import BasketRow from '../components/BasketRow.vue'
    export default {
        data(){
            return{
                store: usePizzaStore()
            }
        },
        components:{
            BasketRow,
        }
    }
</script>

<template>
    <div class="p-4" v-for="(pizza, index) in store.basketList" :key="index" >
        <BasketRow :item="pizza"/>
    </div>
</template>