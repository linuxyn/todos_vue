<template>
  <!-- 判断是否展示，这里用totalTodos，当为0时，则不展示 -->
  <div class="todo-footer" v-show="totalTodos">
    <label>
      <!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->
      <!-- 因为上面既有展示又有修改，所以这里可以采用v-model的方式好一些 -->
      <input type="checkbox" v-model="isAll"/>
    </label>
    <span>
      <span>已完成{{ doneTodo }}</span> / 全部{{ totalTodos }}
    </span>
    <button class="btn btn-danger" @click="handleDone">清除已完成任务</button>
  </div>
</template>
<script>
  export default {
    name:'todosFooter',
    props:['todos'],
    computed:{
      // 已完成的todo个数
      doneTodo(){
        // const x = this.todos.reduce((pre, current)=>{
        //   console.log('@', pre, current)
        //   return pre + (current.done ? 1 : 0)
        // }, 0)
        //  return x

        return this.todos.reduce((pre, todo)=>pre + (todo.done ? 1 : 0)
        , 0)
        
      },
      // 总共的todo个数
      totalTodos(){
        return this.todos.length
      },
      //
      isAll: {
        get(){
          // 判断已完成和总共的是否相等且总数要大于0，才全部选中
          return this.doneTodo === this.totalTodos && this.totalTodos > 0
        },
        set(value){
            console.log('计算属性isAll发生变化了=>',value)
            // 触发自定义事件
            this.$emit('checkAllTodo', value)
        }

      }
    },
    methods:{
      // // 选中全部，或者取消选中全部
      // checkAll(e){
      //   console.log('选中全部，或者取消选中全部', e.target.checked)
      //   this.checkAllTodo(e.target.checked)
      // },
      handleDone(){
        console.log('清除已完成的任务')
        this.$emit('clearAlltodo')
      }
    },
  }
</script>
<style scoped>
  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>