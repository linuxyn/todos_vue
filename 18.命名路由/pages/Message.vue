<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!-- 第一种写法: 跳转路由并携带query参数，to的字符串写法 -->
        <!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{ m.title }}</router-link> -->
        
        <!-- 第二种写法：跳转路由并携带query参数，to的对象写法 (推荐使用第二种)-->
        <router-link :to="{
          // path:'/home/message/detail',
          name: 'detailRouterName',
          query:{
            id:m.id,
            title:m.title
          }
        }">
          {{ m.title }}
        </router-link>

      </li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>
<script>

  export default {
    name:'MyMessage',
    data() {
      return {
        messageList:[
          {id:'001', title:'message1'},
          {id:'002', title:'message2'},
          {id:'003', title:'message3'},
        ]
      }
    },
  }
</script>
<style scoped>

</style>