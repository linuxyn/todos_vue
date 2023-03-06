<template>
  <div>
    <h2>我是About的内容</h2>
  </div>

</template>
<script>
  export default {
    name: 'MyAbout',
    // destroyed() {
    //   console.log('组件About销毁了')
    // },
    // mounted() {
    //   console.log('组件About挂载完成')
    // },

    // 通过路由规则，进入该组件时被调用
    beforeRouteEnter (to, from, next) {
      console.log('About--beforeRouteEnter:', to,from,next)
      if(to.meta.isAuth){ // 判断是否需要鉴权
        if(localStorage.getItem('school') == 'atguigu'){
          next()
        } else {
          alert('学校名不对，您无权访问')
        }
      } else {
        next()
      }
    },
    // 通过路由规则，离开该组件时被调用
    beforeRouteLeave (to, from, next) {
      console.log('About--beforeRouteLeave:', to,from,next)
      next()
    }
  }
</script>
<style scoped>

</style>