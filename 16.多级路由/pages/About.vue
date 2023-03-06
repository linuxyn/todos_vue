<template>
  <h2>我是About的内容</h2>
</template>
<script>
  export default {
    name: 'MyAbout',
    destroyed() {
      console.log('组件About销毁了')
    },
    mounted() {
      console.log('组件About挂载完成')
    },
  }
</script>
<style scoped>

</style>