<template>
  <li>
    <label>
      <input type="checkbox" 
        :checked="todo.done"
        :isEdit="todo.isEdit"
        @change="handleCheck(todo.id)"
        />
      <!-- 如下代码也能实现功能，但是不太推荐，因为违反原则，因为修改了props，利用vue监测不到对象中元素的改变这一问题，所以能实现功能 -->
      <!-- <input type="checkbox" v-model="todo.done"> -->
      <span v-show="!todo.isEdit">{{ todo.title }}</span>
      <input v-show="todo.isEdit" 
        type="text" 
        :value="todo.title"
        ref="inputTitle"
        @blur="handleBlur($event,todo)"
        >
    </label>
    <button class="btn btn-danger" @click="handleTodo(todo.id)">删除</button>
    <button v-show="!todo.isEdit" class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
  </li>
</template>
<script>
  import eventBus from '../config/constans'
  export default {
    name: 'todosItem',
    // 声明接收todo对象
    props: ['todo'],
    methods: {
      handleCheck(id){
        // 通过App组件将对应的done值取反
        this.$bus.$emit(eventBus.checkTodo,id)
      },
      handleTodo(id){
        if(confirm('确定删除么？')){
          this.$bus.$emit(eventBus.deleteTodo,id)
        }
      },
      handleEdit(todo){
        // 如何判断某个对象上是否包含某个属性
        if(Object.prototype.hasOwnProperty.call(todo, 'isEdit')){
          todo.isEdit = true
        } else{
          this.$set(this.todo, 'isEdit', true)
        }
        // 编辑之后获取焦点，其实vue是在这个方法所有的代码都执行完了，
        // 那个input才会出来，所以这里获取不到焦点，因此需要vue的$nextTick api接口
        // this.$refs.inputTitle.focus()

        // 在本地dom执行完才开始执行下面的方法
        this.$nextTick(function(){
          this.$refs.inputTitle.focus()
        })
        
      },
      // 失去焦点回调，真正执行修改逻辑
      handleBlur(event,todo){
        todo.isEdit = false
        if(!event.target.value.trim()) return alert("输入不能为空")
        this.$bus.$emit(eventBus.updateTodo, todo.id, event.target.value)
      }
    }
  }
</script>
<style scoped>
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }

  li:hover {
    background-color:#ddd;
  }
  li:hover button{
    display: block;
  }
</style>