<template>
  <div>
    <!-- 点击取反,赋值回去 -->
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- 加上transition之后，vue会在合适的时候，样式自动加上hello--enter-active或者hello-leave-active  name必要和下面的对应上 -->
    <transition-group name="hello" appear>
      <h1 v-show="!isShow" class="come" key="1">你好啊！</h1>
      <h1 v-show="isShow" class="come" key="2">尚硅谷</h1>
    </transition-group>
  </div>
</template>

<script>
  export default {
    name:"MyTest3",
    data() {
      return {
        isShow:true
      }
    },
  }
</script>
<style scoped>
  h1 {
    background-color: skyblue;
    /* transition: 0.5s linear; */
  }
  /* 使用过渡来实现 */
  /* 进入的起点 离开的终点 */
  .hello-enter, .hello-leave-to{
    transform: translateX(-100%);
  }
  /* 进入的终点 离开的起点 */
  .hello-enter-to, .hello-leave{
    transform: translateX(0);
  }

  .hello-enter-active,.hello-leave-active{
    transition: 0.5s linear;
  }
</style>