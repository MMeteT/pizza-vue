import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePizzaStore = defineStore('pizza', {  
  state(){
    return{
      basketList:[]
    }
  },
  getters:{
    numberOfItem(state){
      return state.basketList.length
    }
  },
  actions:{
    add(pizza){
      this.basketList.push(pizza)
    },
    remove(pizza){
      const index = this.basketList.findIndex((element) => element.id===pizza.id)
      this.basketList.splice(index,1)
    }
  }
})
