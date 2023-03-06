<template>
  <div class="category">
    <h3>{{title}}</h3>
    <!-- 定义一个插槽（挖一个坑，等着组件的使用者进行填充） -->
      <slot>我是一些默认值，当使用者没有传入具体结构时，我会出现</slot>
  </div>
</template>
<script>

  export default {
    name:"MyCategory",
    props:['title'],
  }
  
</script>
<style>
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