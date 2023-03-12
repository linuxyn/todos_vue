<template>
  <div class="container">
    <Category title="美食">
      <img src="./assets/sk.webp" alt="">
    </Category>

    <Category title="游戏">
      <ul>
        <li v-for="(game, index) in games" :key="index">{{ game }}</li>
      </ul>
    </Category>
    
    <Category title="电影" :listData="films">
      <ul>
        <video width="" height="" controls src="https://www2.scut.edu.cn/_upload/article/videos/c1/45/0da89809481581c9679f8de39d33/13e84afe-796f-42e5-91f5-80405dfa554c-B.mp4">
        </video>
      </ul>
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
  .container {
    display:flex;
    justify-content: space-around;
  }

</style>
