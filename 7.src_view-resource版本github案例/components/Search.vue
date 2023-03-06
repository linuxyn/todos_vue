<template>
    <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="keyword"/>&nbsp;<button @click="searchUsers">Search</button>
    </div>
  </section>
</template>
<script>
  // import axios from 'axios'
  export default {
    name:'githubSearch',
    data() {
      return {
        keyword:''
      }
    },
    methods: {
      searchUsers(){
        // 请求前更新List数据,因为isFrist每次都要传，值都是一样的比较繁琐，这里可以省略，后面需要特殊处理
        this.$bus.$emit('updateListData',{isFrist:false,isLoading:true,errorMsg:'',users:[]})
        this.$http.get(`https://api.github.com/search/users?q=${this.keyword}`).then(
          response => {
            console.log('请求成功了', response.data)
            // 请求成功后更新List数据
            this.$bus.$emit('updateListData',{isLoading:false,errorMsg:'',users:response.data.items})
          },
          error => {
            console.log('请求失败了', error.message)
            // 请求失败后更新List数据
            this.$bus.$emit('updateListData',{isLoading:false,errorMsg:error.message,users:[]})
          }
        )
      }
    },
  }
</script>