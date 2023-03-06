<template>
  <ul>
    <li>消息id:{{ $route.query.id }}</li>
    <li>消息名字:{{ $route.query.title }}</li>
</ul>
</template>
<script>
  export default {
    name:'MyDetail',
    mounted() {
      console.log(this)
    },
  }
</script>
<style scoped>

</style>