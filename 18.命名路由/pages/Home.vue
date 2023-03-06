<template>
  <div>
    <h2>我是Home的内容</h2>
      <div>
      <ul class="nav nav-tabs">
        <li>
          <!-- <a class="list-group-item" href="./home-news.html">News</a> -->
          <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
        </li>
        <li>
          <!-- <a class="list-group-item active" href="./home-message.html">Message</a> -->
          <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
        </li>
      </ul>
      <!-- 展示组件的位置 -->
      <router-view></router-view>
    </div>
      
  </div>

</template>
<script>
  export default {
    name: 'MyHome',
    // destroyed() {
    //   console.log('组件Home销毁了')
    // },
    // mounted() {
    //   console.log('组件Home挂载完成')
    //   console.log(this)
    // },

  }
</script>
<style scoped>

</style>