<template>
  <div class="page-ranking">
    <div class="rank_list_nav">
      <div class="nav_layout">
        <div class="left">
          <router-link to="/Home" style="text-decrotion:none">
            <img src="../../../public/tupi/arrow.png" alt="">
          </router-link>
      </div>
      <div class="rig">排行榜</div>
          <div class="rig-box"></div>
          </div>
      <!-- 下面的标题不能根据索引判断,否则是部分显示  注意！-->
      <div class="rank_list_title">
        <div class="list_title_item"   :class="{active: cur === 'shouye' }" @click="cur = 'shouye'" >
         阅读榜
        </div>
          <div class="list_title_item" :class="{active: cur === 'xzhou'}"  @click="cur = 'xzhou'">
         新作榜
        </div>
          <div class="list_title_item" :class="{active: cur === 'zhb' }" @click="cur = 'zhb'">
         综合榜
        </div>
      </div>
    </div>
    <div class="scroll" v-show="cur == 'shouye'">
      <div class="rank_list_con" v-for="(item, index) in rankdata" :key="item.comic_id">
        <div class="comic_horizontal_container">
          <img :src="item.hcover" alt="">
          <div class="comic_cover_horizontal_info">
            <div class="comic_cover_horizontal_title">{{item.name}}
            </div>
            <div class="comic_cover_horizontal_author">
              <img src="../../../public/tupi/tb.png"/>
              {{item.cate_list[0].cate_cn_name}}/{{item.cate_list[1].cate_cn_name}}/{{item.cate_list[2].cate_cn_name}}
            </div>
             <div class="comic_cover_horizontal_author">
              <img src="../../../public/tupi/xtb.png"/>
              {{item.sina_nickname}}
            </div>
          </div>
          <div class="comic_cover_horizontal_rank">
          <!-- <img src="../../../public/tupi/tb.png" alt=""> -->
             <div class="rank_num" :class="`rank_num-${index+1}`">
             <!-- {{index+1 | limitBy, 4 ,index+1-3}} -->
             <!-- {{message | index+1 }} -->
             {{ index | val }}
             </div>
          </div>
        </div>
      </div>
    </div>

     <div class="scroll" v-show="cur == 'xzhou'">
      <div class="rank_list_con" v-for="(item1, index) in news" :key="item1.comic_id">
        <div class="comic_horizontal_container">
          <img :src="item1.hcover" alt="">
          <div class="comic_cover_horizontal_info">
            <div class="comic_cover_horizontal_title">{{item1.name}}
            </div>
            <div class="comic_cover_horizontal_author">
              <img src="../../../public/tupi/tb.png"/>
              {{item1.cate_list[0].cate_cn_name}}/{{item1.cate_list[1].cate_cn_name}}/{{item1.cate_list[1].cate_cn_name}}
            </div>
             <div class="comic_cover_horizontal_author">
              <img src="../../../public/tupi/xtb.png"/>
              {{item1.sina_nickname}}
            </div>
          </div>
          <div class="comic_cover_horizontal_rank">
          <!-- <img src="../../../public/tupi/tb.png" alt=""> -->
             <div class="rank_num" :class="`rank_num-${index+1}`">
             <!-- {{index+1 | limitBy, 4 ,index+1-3}} -->
             <!-- {{message | index+1 }} -->
             {{ index | val }}
             </div>
          </div>
        </div>
      </div>
    </div>

    <div class="scroll" v-show="cur == 'zhb'">
      <div class="rank_list_con" v-for="(item1, index) in zh" :key="item1.comic_id">
        <div class="comic_horizontal_container">
          <img :src="item1.hcover" alt="">
          <div class="comic_cover_horizontal_info">
            <div class="comic_cover_horizontal_title">{{item1.name}}
            </div>
            <div class="comic_cover_horizontal_author">
              <img src="../../../public/tupi/tb.png"/>
              {{item1.cate_list[0].cate_cn_name}}/{{item1.cate_list[1].cate_cn_name}}/{{item1.cate_list[1].cate_cn_name}}
            </div>
             <div class="comic_cover_horizontal_author">
              <img src="../../../public/tupi/xtb.png"/>
              {{item1.sina_nickname}}
            </div>
          </div>
          <div class="comic_cover_horizontal_rank">
          <!-- <img src="../../../public/tupi/tb.png" alt=""> -->
             <div class="rank_num" :class="`rank_num-${index+1}`">
             <!-- {{index+1 | limitBy, 4 ,index+1-3}} -->
             <!-- {{message | index+1 }} -->
             {{ index | val }}
             </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// 把对象解构出来
import { getIndexrank, getIndexnew, getIndexzh } from '../../api/qw.js'
export default {
  name: 'Ranking',
  data () {
    return {
      num: 0,
      ranks: [
        { id: 1, title: '阅读榜' },
        { id: 2, title: '新作榜' },
        { id: 3, title: '综合榜' }
      ],
      rankdata: [],
      lastdata: [],
      news: [],
      zh: [],
      index1: 0,
      cur: 'shouye'
    }
  },
  methods: {
    fn1 (index) {
      this.num = index
      this.index1 = this.num
      console.log(this.num)
      console.log('====')
      console.log(this.index1)
    },
    getIndexrank () {
      getIndexrank().then(res => {
        this.rankdata = res.data.week
        this.lastdata = res.data.week.slice(res.data.week.length - 7)
        console.log(res.data.week)
        // console.log(this.lastdata)
      })
    },
    getIndexnew () {
      getIndexnew().then(res => {
        this.news = res.data.week
        console.log(res.data.week)
      })
    },
    getIndexzh () {
      getIndexzh().then(res => {
        this.zh = res.data.week
        console.log(res.data.week)
      })
    }
  },
  created () {
    this.getIndexrank()
    this.getIndexnew()
    this.getIndexzh()
  },
  filters: {
    val: function (value) {
      return value > 2 ? value + 1 : ''
    }
  }
}
</script>
<style lang="scss">
.page-ranking {
 height: 100%;
 display: flex;
 flex-direction: column;
 .rank_list_nav{
  width: 100%;
  height: 96px;
 }
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
  .rank_list_title{
  margin-bottom: 8px;
  height: 44px;
  line-height: 44px;
  border-bottom: 1px solid  #b3b3b3;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .list_title_item{
  font-size: 14px;
  color: #b3b3b3;
  align-items: center;
  }
  }
  .active {
    border-bottom: 2px solid red;
  }
  .scroll {
   height: 100%;
   overflow-y: auto;
  }
  .comic_horizontal_container {
   padding: 0 16px 16px;
   width: 100%;
   height: 97px;
   display: flex;
   flex-direction: row;
   box-sizing: border-box;
   img {
   width: 144px;
   height: 81px;
   margin: 0px 4px 0px 0px;
   border-radius: 4px;
   }
   .comic_cover_horizontal_info{
   width: 139px;
   height: 81px;
   padding-right: 16px;
   box-sizing: border-box;
   overflow: hidden;
   flex: 1;
   .comic_cover_horizontal_title{
     margin-top: 4px;
     padding-bottom: 4px;
     color: #333;
     line-height: 32px;
     font-size: 16px;
     white-space: nowrap;
     overflow: hidden;
     text-overflow: ellipsis
   }
   }
  }
  .comic_cover_horizontal_author{
    font-size: 12px;
    color: #000;
    width: 139px;
    height: 24px;
    // align-items: center;
    display: flex;
    flex-direction: row;
    img{
      width: 16px;
      height: 16px;
    }
  }
  .comic_cover_horizontal_rank{
    width: 40px;
    height: 45px;
    // margin-top: 19px;
    .rank_num{
    // padding-top: 20px;
    font-size: 18px;
    color: #666;
    text-align: center;
    line-height: 34px;
    }
    .rank_num{
    width: 40px;
    height: 45px;
    background-size: 100% 100%;
    margin-top: 19px;
    }
  }
  .rank_num-1 {
    background: url('../../../public/tupi/rank1.png') no-repeat 100%;
  }
  .rank_num-2 {
    background: url('../../../public/tupi/rank2.png') no-repeat 100%;
  }
  .rank_num-3 {
    background: url('../../../public/tupi/rank3.png') no-repeat 100%;
  }
  .se{
    display: none;
  }
}
</style>
