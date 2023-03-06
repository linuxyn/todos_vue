<template>
  <div class="container">
    <Category title="美食">
      <img slot="center" src="./assets/sk.webp" alt="">
      <a slot="footer" href="https://www.meishichina.com/">更多美食</a>
    </Category>

    <Category title="游戏">
      <ul slot="center">
        <li v-for="(game, index) in games" :key="index">{{ game }}</li>
      </ul>
      <div slot="footer" class="foot">
        <a href="https://www.meishichina.com/">单机游戏</a>
        <a href="https://www.meishichina.com/">网络游戏</a>
      </div>
    </Category>
    
    <Category title="电影" :listData="films">
      <ul slot="center">
        <video width="" height="" controls src="https://www2.scut.edu.cn/_upload/article/videos/c1/45/0da89809481581c9679f8de39d33/13e84afe-796f-42e5-91f5-80405dfa554c-B.mp4">
        </video>
      </ul>
      <!-- <template  slot="footer" > -->
      <template  v-slot:footer> <!-- v-slot:xxx 只能和template一起使用-->
        <div class="foot">
          <a href="https://www.meishichina.com/">经典</a>
          <a href="https://www.meishichina.com/">热门</a>
          <a href="https://www.meishichina.com/">推荐</a>
        </div>
        <h4 class="foot">欢迎观影</h4>
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
  data() {
      return {
        foods:['火锅','烧烤','烧烤','小龙虾'],
        games:['红色警戒','穿越火线','劲舞团','超级马里奥'],
        films:['流浪地球2','满江红','熊出没','阿凡达','狂飙']
      }
    },
}
</script>
<style>
  .container,.foot {
    display:flex;
    justify-content: space-around;
  }

</style>
