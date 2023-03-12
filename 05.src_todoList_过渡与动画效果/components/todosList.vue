<template>
    <div>
      <ul class="todo-main">
        <transition-group appear name="todo">
          <todosItem v-for="todoObj in todos" 
            :key="todoObj.id" 
            :todo="todoObj" 
          />
      </transition-group>
      </ul>
    </div>
</template>
<script>
import todosItem from './todosItem';

  export default {
    name:'todosList',
    components:{
      todosItem
    },
    props:['todos'] 
  }
</script>
<style scoped>
  /*main*/
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }

  /* 展示动画效果 */
  .todo-enter-active{
    animation: atguigu 0.5s linear;
  }
  .todo-leave-active{
    animation: atguigu 0.5s reverse;
  }

  @keyframes atguigu {
    from{
      transform: translateX(100%);
    }
    to{
      transform: translateX(0px);
    }
  }
</style>