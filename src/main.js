import Vue from 'vue'
import App from './App.vue'

// 引入VueRouter
import VueRouter from 'vue-router'
// 引入路由器
import router from './router'

// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import { Button, Row } from 'element-ui';

Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
Vue.use(Button);
Vue.use(Row);

Vue.config.productionTip = false
// 使用插件
Vue.use(VueRouter)
// Vue.use(ElementUI);

new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
