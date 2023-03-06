<template>
  <div>
    <!-- 模版中可以看到VC身上所有的东西，所以这里直接$store,不用加this.$store -->
    <h1>当前求和: {{ sum }}</h1> 
    <h3>当前和放大10倍: {{ bigSum }}</h3> 
    <h3>我在{{ school }}学习{{ subject }}</h3>
    <h3 style="color: red;">组件Person人员总数是:{{ personList.length }}</h3>
    <select v-model.number="num">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(num)">+</button>
    <button @click="decrement(num)">-</button>
    <button @click="incrementOdd(num)">当前求和为奇数再加</button>
    <button @click="incrementWait(num)">等一等再加</button>
  </div>
</template>
<script>
  import { mapState, mapGetters,mapMutations, mapActions } from 'vuex'
  export default {
    name:"MyCount",
    data() {
      return {
        num: 1
      }
    },
    computed:{ 
      // 借助mapState生成的计算属性，从state中读取数据。（数组写法） 
      ...mapState('countAbout',['sum','school','subject']),
      ...mapState('personAbout',['personList']), 
      // 借助mapGetters生成的计算属性，从getters中读取数据。（对象写法） 
      ...mapGetters('countAbout',{bigSum:'bigSum'}),

    },
    methods: {
      // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations（数组写法）
      ...mapMutations('countAbout', {increment:'JIA',decrement:'JIAN'}),

      // 借助mmapActions生成对应的方法，方法中会调用dispatch去联系actions(对象写法)
      ...mapActions('countAbout', {incrementOdd:'jiaOdd',incrementWait:'jiaWait'}),
    },
    mounted() {
      // console.log(this.$store.state)
    },
  }
  
</script>
<style>
  button{
    margin-left: 10px;
  }
</style>