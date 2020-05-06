// 1.引用vue-router
import Vue from 'vue'
// 2.创建一个router.js,引入vue-router
import VueRouter from 'vue-router'
// 下面是引入各个组件
import Home from '../views/Home'
import Classfiy from '../views/Classfiy'
import End from '../views/End'
import Ranking from '../views/Ranking'
import Send from '../views/Send'
import Search from '../views/Search'
import SearchResult from '../views/SearchResult'
import Resgin from '../views/Resgin'
import Login from '../views/Login'
// 3. 在router.js中引入vue并调用Vue.use()的方法
Vue.use(VueRouter)
// 在router.js中引入创建的router实列对象并导出
const router = new VueRouter({
  routes: [ // 不要写成routers,这种是错误的,否则渲染不出来
    // components组件的名字
    { path: '/home', component: Home },
    { path: '/Classfiy', component: Classfiy },
    { path: '/end', component: End },
    { path: '/ranking', component: Ranking },
    { path: '/send', component: Send },
    { path: '/search', component: Search },
    { path: '/searchresult', component: SearchResult },
    { path: '/Resgin', component: Resgin },
    { path: '/Login', component: Login },
    // { redirect: '/', component: Home }
    { path: '/', redirect: '/home' } // 重定向到首页
  ]
})
export default router// 5. 在main.js中引入创建的router实例（因为main.js 中创建了new Vue）
// import router from './router'//页面组件写好后//配置路由
