<script>
import {
    usePizzaStore
} from '../stores/pizza.js'
export default {
    props: [
        "item"
    ],
    data(){
        return{
            store: usePizzaStore()
        }
    }
}
</script>

<template>
<div class="flex border border-black p-4 gap-4 justify-between">
    <div>
        <div>
            {{item.name}}
        </div>
        <div>
            {{item.description}}
        </div>
    </div>

    <button>Remove</button>
</div>
</template>
