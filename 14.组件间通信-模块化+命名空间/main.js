import Vue from 'vue'
import App from './App.vue'

import vueResource from 'vue-resource'

// 引入store
import store from './store' // 默认导出的是./store/index.js

Vue.config.productionTip = false
// 使用插件
Vue.use(vueResource)

new Vue({
  render: h => h(App),
  // store: store,
  store,
  beforeCreate() {
    Vue.prototype.$bus = this // 安装全局事件总线
  },
}).$mount('#app')
