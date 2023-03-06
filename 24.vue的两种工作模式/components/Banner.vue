<template>
  <div class="col-xs-offset-2 col-xs-8">
    <div class="page-header">
      <h2>Vue Router Demo</h2>
      <button @click="forward">前进</button>
      <button @click="back">后退</button>
      <button @click="go">测试一下go的api</button>
    </div>
  </div>
</template>
<script> 
  export default {
    name:'MyBanner',
    methods: {
      forward(){
        // 前进一步
        this.$router.forward()
      },
      back(){
        // 退后一步
        this.$router.back()
      },
      go(){
        // 连续往后退两步
        this.$router.go(-2)
      }
    },
  }
</script>
<style scoped>

</style>