<template>
  <ul>
    <li>news001 <input type="text"></li>
    <li>news002 <input type="text"></li>
    <li>news003 <input type="text"></li>
  </ul>
</template>
<script>
  export default {
    name:"MyNews",
    activated() {
      console.log('路由组件News被激活了')
    },
    deactivated() {
      console.log('路由组件News失活了')
    },
  }
</script>
<style scoped>

</style>