<template>
  <h1>Counter - vuex</h1>
  <h2>Direct access:{{ $store.state.count }}</h2>
  <h2>computed:{{ countComputed }}</h2>
  <h2>computed:{{ count }}</h2>
  <button @click="increment">+1</button>
  <button @click="incrementBy">+5</button>
  <button @click="incrementRandom">random</button>
  <h2>LastMutation:{{ lastMutation }}</h2>
</template>

<script>
import { mapState } from 'vuex';
export default {
computed: {
  countComputed(){
    return this.$store.state.count
  },
  ...mapState({
    count: state => state.count,
    lastMutation: state => state.lastMutation
  })
},
methods:{
  increment(){
    this.$store.commit('increment')
  },
  incrementBy(){
    this.$store.commit('incrementBy', 5)
  },
  incrementRandom(){
    this.$store.dispatch('incrementRandomInt')
  }
}

}
</script>

<style>

</style>