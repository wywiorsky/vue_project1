<template>
  <div id="app">
    <h1>
      {{ msg }}
    </h1>
    <router-link to="/"> list </router-link>
    <router-link to="/add"> add </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import list from '../components/list.vue'
import add from '../components/add.vue'
export default {
  name: 'app',

  components: {
    list,add
  },

  data() {
    return {
      msg: 'Todo'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a {
  color: #42b983;
}

h1 {
  font-weight: normal;
}

h1>a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style-type: none;
  padding: 0;
}

li>div {
  margin-top: 10px;
}
</style>
