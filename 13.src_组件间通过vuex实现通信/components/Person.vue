<template>
  <div>
    <h1>人员列表</h1>
    <input type="text" placeholder="请输入人员信息" v-model="person">
    <button @click="addPerson(person)">添加人员信息</button>
    <ul>
      <li v-for="p of personList" :key="p.id">{{ p.name }}</li>
    </ul>
    <h3 style="color: red;">Count组件中请和: {{ $store.state.sum }}</h3>
  </div>
</template>
<script>
  import { mapState } from 'vuex';
  import { nanoid } from 'nanoid';
  export default {
    name:"MyPerson",
    data() {
      return {
        person: ''
      }
    },
    computed:{
      // personList(){
      //   return this.$store.state.personList
      // },
      ...mapState(['personList']),
    },
    methods: {
      addPerson(){
        const personObj = {id:nanoid(), name:this.person}
        this.$store.commit('Add_Person', personObj)
        this.person = ''
      },
    },
  }
</script>
<style>

</style>