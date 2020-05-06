<template>
  <div class="page-classify">
     <div class="nav_layout">
     <div class="left">
       <router-link to="/Home" style="text-decrotion:none">
         <img src="../../../public/tupi/arrow.png" alt="">
       </router-link>
     </div>
     <div class="rig">分类</div>
     <div class="rig-box"></div>
    </div>

    <div class="cate_list filter_list highList">
    <div class="cate_list_item filter_item" v-for="item in navList.cate_list" :key="item.cate_id" :class="{filter_active_item_red: cateSelect===item.cate_id}" @click="cateHandel(item.cate_id)" >
    {{item.cate_cn_name}}  <!-- filter_active_item_red -->
    </div>
    </div>
    <div class="show_filter">
      <div class="end_status_list filter_list">
        <div class="pay_status_list_item filter_item shuzhi" v-for="item in navList.end_status_list" :key="item.end_status" :class="{filter_active_item_red:endSelect===item.end_status}" @click="endHandel(item.end_status)">
          {{item.end_status_name}}
        </div>
      </div>
      <div class="pay_status_list filter_list">
        <div class="pay_status_list_item filter_item shuzhi" v-for="item in navList.comic_pay_status_list" :key="item.comic_pay_status" :class="{filter_active_item_red: paySelect===item.comic_pay_status}" @click="payHandel(item.comic_pay_status)">
        {{item.comic_pay_status_name}}
        </div>
      </div>
    </div>

    <div class="category_loaded pt60">
      <div class="loadMoreWraper scroll">
        <div class="category_comic_container">
          <div class="comic_cover_container" v-for="item in cateList" :key="item.comic_id">
            <img :src="item.comic_hcover" alt="">
            <div class="comic_cover_info">
              <div class="comic_cover_titleBox">
                <div class="comic_cover_title">
                  {{ item.comic_name }}
                </div>
                <div class="comic_cover_desc">
                  {{ item.comic_desc }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// 把请求的接口数据解构出来
import { getIndexclassify, getIndexliebao } from '../../api/qw'
export default {
  name: 'Classfiy',
  data () {
    return {
      // infos: [],
      // info1: [],
      // info2: [],
      // num: 0,
      // num1: 0,
      // num2: 0,
      // navlist: {}
      navList: {},
      cateSelect: null,
      endSelect: null,
      paySelect: null,
      cateList: []
    }
  },
  props: {
    types: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    // getIndexclassify () {
    //   getIndexclassify().then(res => {
    //     this.infos = res.data.cate_list
    //     this.info1 = res.data.end_status_list
    //     this.info2 = res.data.comic_pay_status_list
    //     console.log(res.data)
    //   })
    // },
    // fn1 (index) {
    //   this.num = index
    // },
    // fn2 (index1) {
    //   this.num1 = index1
    // },
    // fn3 (index2) {
    //   this.num2 = index2
    // },
    cateHandel (id) {
      this.cateSelect = id
      this.getIndexliebao(this.cateSelect, this.endSelect, this.paySelect)
    },
    endHandel (id) {
      this.endSelect = id
      this.getIndexliebao(this.cateSelect, this.endSelect, this.paySelect)
    },
    payHandel (id) {
      this.paySelect = id
      this.getIndexliebao(this.cateSelect, this.endSelect, this.paySelect)
    },
    getIndexclassify () {
      getIndexclassify().then(res => {
        this.navList = res.data
        this.cateSelect = this.navList.cate_list[0].cate_id
        this.endSelect = this.navList.end_status_list[0].end_status
        this.paySelect = this.navList.comic_pay_status_list[0].comic_pay_status
      })
    },
    getIndexliebao (cateId, endId, payId) {
      getIndexliebao(cateId, endId, payId).then(res => {
        this.cateList = res.data.data
      })
    }
  },
  created () {
    // getIndexliebao需要getIndexclassify,传过来的数据 (B 接口的数据需要)
    this.getIndexclassify()
    // getIndexliebao这个请求要在getIndexclassify这个之后调用可以使用promise 或者是 async await
    this.getIndexliebao(this.cateSelect, this.endSelect, this.paySelect)
  }
}
</script>
<style lang="scss">
.page-classify{
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
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
    .highList{
    width: 375px;
    height: 90px;
  }
   .filter_list{
     padding: 0px 7px 0px 8px;
     flex-direction: row;
     flex-wrap: wrap;
     display: flex;
     box-sizing: border-box;
  }
    .filter_item{
      font-size: 14px;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 60px;
      height: 30px;
      line-height: 30px;
      color: #cccccc;
    }
    .filter_active_item_red{
      color: #ffffff;
      background: #f75d79;
      line-height: 24px;
      width: 54px;
      border-radius: 2px;
      margin-top: 3px;
      height: 24px;
    }
    .show_filter{
      width: 375px;
      height: 60px;
      line-height: 30px;
    }
    .end_status_list{
      width: 375px;
      height: 30px;
    .shuzhi{
      line-height: 30px
     }
    }
    .pt60{
      // background: #f75d79;
      // height: 20000px;
      padding: 0px 4px;
      flex-direction: column;
      display: flex;
      overflow: auto;
      height: 10000px;
      margin-top: 10px;
      width: 375px;
      justify-content: center;
    }
    .scroll{
      overflow-y: auto;
      height: 100%;
    }
    .comic_cover_container{
      width: 175.5px;
      height: 154px;
      // background: blue;
      margin: 0px 4px;
      img{
      width: 175.5px;
      height: 105px;
      }
    }
    .comic_cover_info{
      margin: 0px 8px 0px 0px;
    }
    .comic_cover_titleBox{
      display: flex;
      flex-direction: column;
      // margin: 8px 0px 0px 0px;
      font-size: 14px;
      color: #666;
    }
    .comic_cover_desc{
      font-size: 9px;
      color: #999;
      margin-bottom: 6px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .category_comic_container{
      display: flex;
      flex-wrap: wrap;
      // justify-content: space-around
    }
   }
</style>
