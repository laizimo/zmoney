<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Header from './components/header.vue'
import Footer from './components/footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>

* {
  padding: 0;
  margin: 0;
}

a {
  outline: none;
  text-decoration: none;
  color: #000;
}

ul {
  list-style: none;
}

#app {
  position: relative;
  overflow: hidden;
  background: #efefef;
  min-width: 1200px;
}
</style>
