// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
// 引入组件
import About from '../pages/About'
import Home from '../pages/Home'

import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

// 创建并暴露一个路由器
const router = new VueRouter({
  routes: [
    { 
      name:'aboutRouterName',
      path:'/about',
      component:About,
      meta:{title:'关于'}
    },
    {
      path:'/home',
      component:Home,
      meta:{title:'主页'},
      children: [
        {
          name:'xinwen',
          path:'news',
          component:News,
          meta:{isAuth:true,title:'新闻'},
        },
        {
          name:'xiaoxi',
          path:'message',
          component:Message,
          meta:{isAuth:true,title:'消息'},
          children:[
            {
              name:'detailRouterName',
              path:'detail',
              component:Detail,
              meta:{title:'详情'},
              // props的第一种写法，值为对象,该对象中所有的key-value都会以props的形式传递给Detail组件
              // props:{a:1,b:'hello'}

              // props的第二种写法，值为bool值。若bool值为真，就会把该路由组件收到params参数，以props的形式传递给Detail组件
              // props: true

              // props的第三种写法，值为函数
              props($route){
                return {
                  id:$route.query.id,
                  title:$route.query.title}
              }
              // 结构赋值
              // props({query}){
              //   return {id:query.id,title:query.title}
              // },
              // 结构赋值的连续写法
              // props({query:{id,title}}){
              //   return {id,title}
              // }
            }
          ]
        }
      ]
    }
  ]
})

// 全局前置路由守卫: 初始化时执行、每次路由切换之前执行
router.beforeEach((to,from,next)=>{
  console.log("前置路由", from,to)
  // if(to.path == '/home/news' || to.path == '/home/message' ){
  // if( to.name =='xiaoxi' || to.name == 'xinwen'){
  if(to.meta.isAuth){
    if(localStorage.getItem('school') == 'atguigu'){
      next()
    } else {
      alert('学校名不对，您无权访问')
    }
  } else {
    next()
  }
})

// 全局后置路由守卫: 初始化时执行、每次路由切换后执行
router.afterEach((to,from)=>{
  console.log('后置路由守卫',to,from)
  if(to.meta.title){
    document.title = to.meta.title // 修改网页的title
  }else{
    document.title ='vue默认title'
  }
})

export default router