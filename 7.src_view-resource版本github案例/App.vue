<template>
  <div class="container">
    <Search/>
    <List/>
  </div>
</template>

<script>

// import './assets/css/bootstrap.css'
import List from './components/List'
import Search from './components/Search'
export default {
  name: 'App',
  components:{
    List,
    Search,
  }
}
</script>
