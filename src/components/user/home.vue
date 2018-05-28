<template>
  <div class="user">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './header.vue'

export default {
  data () {
    return {}
  },
  components: {
    Header
  }
}
</script>

<style scoped>

</style>
