<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="add"/>
  </div>
</template>
<script>
  
  import {nanoid} from 'nanoid'
  export default {
    name:'todosHeader',
    methods: {
      add(event){
        // console.log(event.target.value)
        // 生成用户的唯一id采用nanoid，首先需要安装nanoid这个包: npm i nanoid
        // 如果用户输入为空，直接返回，结束逻辑
        if(!event.target.value.trim()) return alert('输入不能为空')
        // 将用户的输入包装成一个todo对象
        const todoObj = {id:nanoid(),title: event.target.value,done:false}
        // 触发自定义事件，并把参数传给App中的回调函数
        this.$emit('addTodo', todoObj)
        // 通过App组件去添加一个todo对象
        // this.addTodo(todoObj)
        // 清空输入
        event.target.value = ''
      }
    },
    // props:["addTodo"]
  }
</script>
<style scoped>
/* header */
.todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
</style>