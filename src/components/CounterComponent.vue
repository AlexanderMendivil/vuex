<template>
  <h1>Counter - vuex</h1>
  <h2>Direct access:{{ $store.state.counter.count }}</h2>
  <h2>computed:{{ countComputed }}</h2>
  <h2>computed:{{ count }}</h2>
  <button @click="increment">+1</button>
  <button @click="incrementBy">+5</button>
  <button @click="incrementRandomInt" :disabled="isLoading">random</button>
  <h2>LastMutation:{{ lastMutation }}</h2>

  <h2>Direct getter: {{ $store.getters['counter/squareCount'] }}</h2>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
computed: {
  countComputed(){
    return this.$store.state.counter.count
  },
  ...mapState('counter', ['count', 'lastMutation', 'isLoading'])
  // ...mapState('counter',{
  //   count: state => state.count,
  //   lastMutation: state => state.lastMutation,
  //   isLoading: state => state.isLoading,

  // })
},
methods:{
  increment(){
    this.$store.commit('counter/increment')
  },
  incrementBy(){
    this.$store.commit('counter/incrementBy', 5)
  },
  incrementRandom(){
    this.$store.dispatch('incrementRandomInt')
  },
  ...mapActions('counter',['incrementRandomInt'])
  // ...mapActions('counter', {
  //   randomInt: 'incrementRandomInt'
  // }),
  
},

}
</script>

<style>

</style>