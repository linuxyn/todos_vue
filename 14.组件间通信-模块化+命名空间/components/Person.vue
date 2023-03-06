<template>
  <div>
    <h1>人员列表</h1>
    <input type="text" placeholder="请输入人员信息" v-model="person">
    <button @click="addPerson(person)">添加人员信息</button>
    <button @click="addWang(person)">添加一个姓王的人员信息</button>
    <button @click="addWord(person)">添加一个人-名字随机</button>

    <ul>
      <li v-for="p of personList" :key="p.id">{{ p.name }}</li>
    </ul>
    <h3>列表中第一个人的名字是: {{ firstPersonName }}</h3>
    <h3 style="color: red;">Count组件中请和: {{ sum }}</h3>
  </div>
</template>
<script>
  import { nanoid } from 'nanoid';
  export default {
    name:"MyPerson",
    data() {
      return {
        person: ''
      }
    },
    computed:{
      personList(){
        return this.$store.state.personAbout.personList
      },
      sum(){
        return this.$store.state.countAbout.sum
      },
      firstPersonName(){
        // 注意取对象中的值，除了用"对象.key"之外，还可以用"对象['key']"
        return this.$store.getters['personAbout/firstPersonName']
      }
     
    },
    methods: {
      addPerson(){
        const personObj = {id:nanoid(), name:this.person}
        this.$store.commit('personAbout/Add_Person', personObj)
        this.person = ''
      },
      addWang(){
        const personObj = {id:nanoid(), name:this.person}
        this.$store.dispatch('personAbout/AddPersonWang', personObj)
        this.person = ''
      },
      addWord(){
        this.$store.dispatch('personAbout/AddWords')
      }
    },
    mounted() {
      console.log(this)
    },
  }
</script>
<style>

</style>