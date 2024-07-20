<script>
import PizzaCard from '../components/PizzaCard.vue'
export default {
    data() {
        return {
            baseUrl: 'https://669a57039ba098ed61ff463c.mockapi.io/api/v1/pizzas',
            pizzaList: []

        }
    },
    components: {
        PizzaCard,

    },
    async created() {
        const response = await fetch(this.baseUrl)
        this.pizzaList = await response.json()
    }
}
</script>

<template>
<main>
    <div v-for="(pizza, index) in pizzaList" :key="index" class="p-4">
        <PizzaCard :pizzaProp="pizza" />
    </div>
</main>
</template>
