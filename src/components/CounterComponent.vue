<template>
  <h1>Counter - vuex</h1>
  <h2>Direct access:{{ $store.state.count }}</h2>
  <h2>computed:{{ countComputed }}</h2>
  <h2>computed:{{ count }}</h2>
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
}
}
</script>

<style>

</style>