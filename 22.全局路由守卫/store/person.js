import axios from "axios"
import { nanoid } from "nanoid"

// 人员管理相关配置
export default  {
  namespaced:true,
  actions:{
    AddPersonWang(context,value){
      if(value.name.indexOf('王') === 0){
        context.commit('Add_Person', value)
      } else {
        alert('添加的人必须姓王')
      }
    },

    // 发送一个axios请求
    AddWords(context){
      axios.get('https://api.uixsj.cn/hitokoto/get?type=hitokoto').then(
        response => {
          console.log(response.data, context)
          context.commit('Add_Person', {name:response.data,id:nanoid()})
        },
        error => {
          alert('请求报错了:', error.mesage)
        }

      )
    }
  },
  mutations:{
    Add_Person(state, value){
      console.log('mutations中的Add_Person被调用了',state, value)
      state.personList.unshift(value)
    }
  },
  getters:{
    firstPersonName(state){
      return state.personList[0].name
    }
  },
  // 准备state-用于存储数据
  state:{
    personList:[
      {id:'001',name:'张三'}
    ]
  }
}