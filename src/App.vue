<template>
  <div id="app">
    <div class="todo-container">
      <div class="todo-wrap">
        <!-- 通过App给子组件传递函数，主要是为了接收子组件中函数的返回值 -->
        <todosHeader :addTodo="addTodo"/>
        <todosList 
          :todos="todos" 
          :checkTodo="checkTodo"
          :deleteTodo="deleteTodo"
        />
        <todosFooter :todos="todos" 
          :checkAllTodo="checkAllTodo" 
          :clearAlltodo="clearAlltodo"
        />
      </div>
    </div>
  </div>
</template>

<script>
import todosHeader from './components/todosHeader';
import todosList from './components/todosList';
import todosFooter from './components/todosFooter';

export default {
  name: 'App',
  components: {
    todosHeader,
    todosList,
    todosFooter,
  },
  data() {
    return {
        todos: [
        // {id: '001',title:'吃饭',done:false},
        // {id: '002',title:'睡觉',done:false},
        // {id: '003',title:'打豆豆',done:true},
        // {id: '004',title:'学习',done:false},
        ]
      }
  },
  methods: {
    // 添加一个todo
    addTodo(todoObj){
      console.log('App收到了子组件Header传过来的要添加的todo对象',todoObj)
      this.todos.unshift(todoObj)
    },
    // 勾选或者取消勾选
    checkTodo(id){
      console.log('App收到了子组件Item传过来的是否要勾选的checkObj对象',id)
      this.todos.forEach((todo)=>{
        if(todo.id == id){
          // 原来的值取反，赋值回去就可以了
          todo.done = !todo.done
        }
      })
    },
    // 删除一个todo
    deleteTodo(id){
      console.log('App收到了子组件Item传过来的要删除的todo的id',id)
      this.todos =  this.todos.filter(todo=> todo.id !== id)
    },
    // 全选或者取消全选
    checkAllTodo(done){
      console.log('App收到了子组件footer传过来的是否要全选或者取消全选',done)
      this.todos.forEach(todo => {
        todo.done = done
      });
    },
    // 清除已完成任务
    clearAlltodo(){
      this.todos = this.todos.filter((todo)=>{
      return !todo.done
      })
    }
  },
  
}
</script>

<style>
  /*base*/
  body {
    background: #fff;
  }

  .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }

  .btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
  }

  .btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
  }

  .btn:focus {
    outline: none;
  }

  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
