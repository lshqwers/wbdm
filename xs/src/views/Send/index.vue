<template>
  <div class="send">
    <div class="nav_layout">
     <div class="left">
       <router-link to="/Home" style="text-decrotion:none">
         <img src="../../../public/tupi/arrow.png" alt="">
       </router-link>
     </div>
     <div class="rig">放送表</div>
     <div class="rig-box"></div>
    </div>
    <div class="release_date" id="shuju">
      <!-- http://manhua.weibo.cn/wbcomic/comic/daypub_list?pub_day=&page_num=1&rows_num=20&_type=h5 -->
      <!-- <p class="release_date_day" v-for="arr in arrtime" :key="arr.id">{{arr.week}}</p> -->
      <!-- <p class="release_date_day">周六</p> -->
      <!-- <p class="release_date_day">周日</p>
      <p class="release_date_day">周一</p>
      <p class="release_date_day">周二</p>
      <p class="release_date_day">周三</p>
      <p class="release_date_day">周四</p>
      <p class="release_date_day">周五</p>
      <p class="release_date_day">今天</p> -->
      <p class="release_date_day"  v-for="(time, index) in week" :key="time.pub_day" @click="fn1(index)" :class="{bottom:index == num}">{{time.pub_name}}
        </p>
    </div>
    <!-- 下面是漫画图的绘制-->
    <div class="load_state">
      <img src="../../../public/tupi/manhuizi.png"/>
      <p>今日的漫画还在绘制中</p>
    </div>
  </div>
</template>
<script>
// 把请求接口的解出来
import { getIndexweek, getIndexmain } from '../../api/cartoon'
// import Vue from 'vue'
export default {
  name: 'Send',
  data () {
    return {
      week: [],
      main: [],
      num: 6
    //   arrtime: [
    //     { id: 1, week: '周六' },
    //     { id: 2, week: '周日' },
    //     { id: 3, week: '周一' },
    //     { id: 4, week: '周二' },
    //     { id: 5, week: '周三' },
    //     { id: 6, week: '昨天' },
    //     { id: 7, week: '今天' }
    //   ]
    }
  },
  methods: {
    getIndexweek () {
      // 这个是自己定义的方法
      // 下面是调用接口的方法
      getIndexweek()
        .then(res => {
          // 从api的请求接口的方法getIndexweek作用域
          // console.log(res) 因为response.data的数据,就是一个对象
          // 漫画岛有code的字段。这个字段是200。这个接口是可以的
          if (res.code === 1) { // 这里的状态码根据接口的状态码来出来,如果是2。那么res.code === 2
            // ok
            this.week = res.data.tab_list
            console.log(res.tab_list)
          } else {
            // 不OK,就报错
            alert('404')
          }
        })
        .catch(() => {
          alert('网络异常,请稍后重试')
          // console.log(err)不使用会报错 如handle-callback-err
        })
    },
    getIndexmain () {
      getIndexmain()
        .then(res => {
          // 从api的请求接口的方法getIndexweek作用域
          // console.log(res) 因为response.data的数据,就是一个对象
          // 漫画岛有code的字段。这个字段是200。这个接口是可以的
          if (res.code === 1) {
            // ok
            this.main = res.data
            // console.log('week', this.main)
          } else {
            // 不OK,就报错
            alert('404')
          }
        })
        .catch(() => {
          alert('网络异常,请稍后重试')
          // console.log(err)不使用会报错 如handle-callback-err
        })
    },
    fn1 (index) {
      this.num = index
    }
    /* eslint-disable */
    // new Vue({
    //  el: '#shuju',
    //  data:{
    //    arrtime: [
    //      {id:1,week:'周六'},
    //      {id:1,week:'周日'},
    //      {id:1,week:'周一'},
    //      {id:1,week:'周二'},
    //      {id:1,week:'周三'},
    //      {id:1,week:'昨天'},
    //      {id:1,week:'今天'},
    //    ]
    //  },
    // })
    /* eslint-enable */
  },
  // mounted()不能放在methods方法中
  mounted () {
    // getIndexweek() 这种调用不加this是错误的,正确应该用this.getIndexweek()
    this.getIndexweek()
    this.getIndexmain()
  }
}
</script>
<style lang="scss">
.send {
  height: 100%;
  display: flex;
  flex-direction: column;
  .nav_layout {
    width: 100%;
    height: 44px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left img {
      width: 44px;
      height: 44px;
    }
    .rig {
      font-size: 18px;
      color: #333;
    }
    .rig-box {
      width: 44px;
      height: 44px;
    }
  }
  .release_date {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 16px;
    border-bottom: 1px solid gainsboro;
    color: #b3b3b3;
    line-height: 40px;
    .release_date_day {
      font-size: 14px;
      // color: #333;
    }
  }
  // 漫画的绘制
  .load_state {
    //  height: 565px;
    height: 100%;
    //  line-height: 565px; 他们会非常的大
    align-items: center;
    display: flex;
    flex-direction: column;
    // overflow: hidden;
    justify-content: center;
  }
  img {
    width: 184px;
    height: 184px;
  }
  p {
    color: #999;
    font-size: 14px;
    height: 40px;
    text-align: center;
  }
  .bottom {
    border-bottom: 2px solid red;
  }
}
</style>
