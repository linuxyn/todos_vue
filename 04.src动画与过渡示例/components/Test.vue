<template>
  <div>
    <!-- 点击取反,赋值回去 -->
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- 加上transition之后，vue会在合适的时候，样式自动加上hello--enter-active或者hello-leave-active  name必要和下面的对应上 -->
    <transition name="hello" appear>
      <h1 v-show="isShow" class="come">你好啊！</h1>
    </transition>
  </div>
</template>

<script>
  export default {
    name:"MyTest",
    data() {
      return {
        isShow:true
      }
    },
  }
</script>
<style scoped>
  h1 {
    background-color: orange;
  }
  /* 需要了解下css3动画 */
  /* 名字需要按照vue定义的来 */
  .hello-enter-active{
    animation: atguigu 0.5s linear;
  }
  .hello-leave-active{
    animation: atguigu 0.5s reverse;
  }


  @keyframes atguigu {
    from{
      transform: translateX(-100%);
    }
    to{
      transform: translateX(0px);
    }
  }
</style>