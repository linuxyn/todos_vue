<template>
  <div class="row">
    <div class="card" v-for="(user, id) in info.users" :key="id">
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style='width:100px'/>
      </a>
      <p class="card-text">{{ user.login }} hello</p>
    </div>
    <!-- 欢迎词 -->
    <h1 v-show="info.isFrist">Welcome to use !</h1>
    <!-- 显示加载中 -->
    <h1 v-show="info.isLoading">loading...</h1>
    <!-- 请求出错了 -->
    <h1 v-show="info.errorMsg">{{ info.errorMsg }}</h1>
  </div>
</template>
<script>
export default {
  name:'githubList',
  data() {
    return {
      info: {
        isFrist:true,
        isLoading:false,
        errorMsg:'',
        users:[]
      }
    }
  },
  methods: {
    updateListData(dataObj){
      console.log('收到了search组件发过来的用户信息',dataObj,this)
      // this.info 合 dataObj 两个对象进行合并，并以后面为主，因为前面在Search组件中，后面没有传isFirst，这里在合并的时候就自动加上了
      this.info = {...this.info,...dataObj}
      // this.isFrist = dataObj.isFrist
      // this.isLoading = dataObj.isLoading
      // this.errorMsg = dataObj.errorMsg
      // this.users = dataObj.users
    }
  },
  mounted() {
    this.$bus.$on('updateListData', this.updateListData)
  },
}
</script>
<style scoped>
  .album {
    min-height: 50rem; /* Can be removed; just added for demo purposes */
    padding-top: 3rem;
    padding-bottom: 3rem;
    background-color: #f7f7f7;
  }

  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }

</style>