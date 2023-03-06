<template>
  <h2>我是Home的内容</h2>
</template>
<script>
  export default {
    name: 'MyHome',
    destroyed() {
      console.log('组件Home销毁了')
    },
    mounted() {
      console.log('组件Home挂载完成')
      console.log(this)
    },

  }
</script>
<style scoped>

</style>