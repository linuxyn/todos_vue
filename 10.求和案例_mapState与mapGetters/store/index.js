// 该文件用于创建Vuex中最核心的store

// 引入Vue
import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'

// 准备actions--用于响应组件中的动作,比如发送ajax请求，业务逻辑处理等
const actions = {
  jia(context,value){
    console.log('actions中的jia被调用了',context,value)
    context.commit('JIA', value) // 这里大写是为了和mutation中的JIA做个区分，不做强制要求
  },
  jian(context,value){
    console.log('actions中的jian被调用了')
    context.commit('JIAN', value)
  },
  jiaOdd(context,value){
    console.log('actions中的jiaOdd被调用了', context)
    if(context.state.sum % 2) {
      context.commit('JIAODD', value) 
    }
  },
  jiaWait(context,value){
    console.log('actions中的jiaWait被调用了')
    setTimeout(() => {
      context.commit('JIAWAIT', value)
    }, 500);
  },
}

// 准备mutations--用于操作数据(state)
const mutations = {
  JIA(state,value){
    console.log('mutations中的JIA被调用了',state, value)
    state.sum += value
  },
  JIAN(state,value){
    console.log('mutations中的JIAN被调用了',state, value)
    state.sum -= value
  },
  JIAODD(state,value){
    console.log('mutations中的JIAODD被调用了',state, value)
    state.sum += value
  },
  JIAWAIT(state,value){
    console.log('mutations中的JIAWAIT被调用了',state, value)
    state.sum += value
  }
}

// 准备state--用于存储数据
const state = {
  sum:0,// 当前的和
  school:'尚硅谷',
  subject: '前端',

}

// 准备getters-用于将state中的数据进行加工
const getters = {
  bigSum(state){
    return state.sum*10
  }
}

Vue.use(Vuex)
// 创建并暴露store
export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters
})

