<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <ul slot="center">
     <slot :games="games">我是一些默认值，当使用者没有传入具体结构时，我会出现</slot>
    </ul>
  </div>
</template>
<script>

  export default {
    name:"MyCategory",
    props:['title'],
    data() {
      return {
        games:['红色警戒','穿越火线','劲舞团','超级马里奥'],
      }
    },
  }
  
</script>
<style scoped>
  .category{
    background-color: skyblue;
    width: 200px;
    height: 300px;
  }
  h3{
    text-align: center;
    background-color: orange;
  }
  img {
    width: 100%;
  }
  video{
    width: 100%;
  }
</style>