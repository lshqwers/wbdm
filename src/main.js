import Vue from 'vue'
import App from './App.vue'
// 5. 在main.js中引入创建的router实例（因为main.js 中创建了new Vue）
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload' // 引入
//  <link rel="stylesheet" href="../src/assets/style/base.scss"> 不能在这里引入 -->
import '../src/assets/style/base.scss' // 不能使用import
Vue.config.productionTip = false
// 基础使用,调用赖加载
Vue.use(VueLazyload)
new Vue({
  router, // 实列路由
  store,
  render: h => h(App)
}).$mount('#app')
