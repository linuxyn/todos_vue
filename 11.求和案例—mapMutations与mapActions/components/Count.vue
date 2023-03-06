<template>
  <div>
    <!-- 模版中可以看到VC身上所有的东西，所以这里直接$store,不用加this.$store -->
    <h1>当前求和: {{ sum }}</h1> 
    <h3>当前和放大10倍: {{ bigSum }}</h3> 
    <h3>我在{{ school }}学习{{ subject }}</h3>
    <select v-model.number="num">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="JIA(num)">+</button>
    <button @click="JIAN(num)">-</button>
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
      
      // 借助mapState生成的计算属性，从state中读取数据。(对象写法)  
      // ...mapState({sum:'sum',school:'school',subject:'subject'}), // 对象中的key表示计算属性，vue为$store.state中我们要取的字段名

      // 借助mapState生成的计算属性，从state中读取数据。（数组写法） 
      ...mapState(['sum','school','subject']), // 当计算属性的名称和 $store.state中我们要取的数据字段名一致可以写成数组

      bigSum(){
        return this.$store.getters.bigSum
      },
      // 借助mapGetters生成的计算属性，从getters中读取数据。（对象写法） 
      ...mapGetters({bigSum:'bigSum'}),

      // 借助mapGetters生成的计算属性，从getters中读取数据。（数组写法） 
      // ...mapGetters(['bigSum']), // 当计算属性的名称和$store.getters中我们要取的数据字段名一致可以写成数组

    },
    methods: {
      // #region 
      // 绕过actions，直接传递给mutations
      // increment(){
      //   this.$store.commit('JIA', this.num)
      // },
      // decrement(){
      //  this.$store.commit('JIAN', this.num)
      // },
      // 

      // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations（对象写法）
      // ...mapMutations({increment:'JIA',decrement:'JIAN'}),
      // 
      
      // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations（数组写法）
      ...mapMutations(['JIA','JIAN']),
      // #endregion

      // incrementOdd(){
      //   this.$store.dispatch('jiaOdd', this.num)
      // },
      // incrementWait(){
      //   this.$store.dispatch('jiaWait', this.num)
      // },
      // 借助mmapActions生成对应的方法，方法中会调用dispatch去联系actions(对象写法)
      ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'}),

      // 借助mmapActions生成对应的方法，方法中会调用dispatch去联系actions（数组写法）
      // ...mapActions(['jiaOdd','jiaWait'])
    },
    mounted() {
      console.log(this.$store.getters.bigSum)
    },
    
  }
  
</script>
<style>
  button{
    margin-left: 10px;
  }
</style>