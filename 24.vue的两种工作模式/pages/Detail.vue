<template>
  <ul>
    <li>消息id:{{ id }}</li>
    <li>消息名字:{{title }}</li>
    <!-- <li>a:{{ a }}</li>
    <li>a:{{ b }}</li> -->
</ul>
</template>
<script>
  export default {
    name:'MyDetail',
    // props:['a','b'],
    props:['id','title'],
    mounted() {
      console.log(this)
    },
  }
</script>
<style scoped>

</style>