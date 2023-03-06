<template>
  <div class="container">
    <Category title="游戏">
      <template scope="atguigu">
        <!-- 生成ul列表 -->
        <ul>
          <li v-for="(game, index) in atguigu.games" :key="index">{{ game }}</li>
        </ul>
      </template> 
    </Category>
  
    <Category title="游戏">
      <template scope="{games}"> <!--这里我们可以直接使用ES6的赋值语法，就不用写atguigu.games了-->
        <ol v-for="(game, index) in games" :key="index">{{ game }}</ol>
      </template> 
    </Category>
  
    <Category title="游戏">
      <template v-slot="{games}"> <!-- 'v-slot' 和 'scope'的作用是一样的  -->
        <h4 v-for="(game, index) in games" :key="index">{{ game }}</h4>
      </template> 
    </Category>
  
  </div>
</template>

<script>

import Category from './components/Category'
export default {
  name: 'App',
  components:{
    Category
  },
}
</script>
<style>
  .container,.foot {
    display:flex;
    justify-content: space-around;
  }
</style>
