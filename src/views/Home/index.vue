<template>
  <div class="page-home">
    <!-- nav start -->
    <div class="nav">
      <div class="nav_left">
        <img src='../../../public/tupi/tit.png' alt="">
      </div>
      <div class="nav_right clr">
        <div class="nav_right-l">
        </div>
         <div class="nav_right-m">
          <i class="iconfont icon-sousuo" @click="goto()"></i>
        </div>
         <div class="nav_right-r">
          <i class="iconfont icon-gerentouxiang"></i>
        </div>
       </div>
    </div>
     <!-- nav end -->
    <!-- mian -->
    <main>
      <div class="home_content_loaded">  <!-- 这个是包裹的元素 -->
      <!-- swiper start -->
     <div class="swipeContainer">
         <div class="swiper-container">
       <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="https://img.manhua.weibo.com/client/2020/02/20/lGv2HgFz.png" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://img.manhua.weibo.com/client/2020/02/11/oulGltGb.png" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://img.manhua.weibo.com/client/2020/02/11/pRKn78FO.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://img.manhua.weibo.com/client/2020/02/11/CwpSK8Ua.png" alt="">
        </div>
     </div>
      <div class="swiper-pagination"></div><!--分页器。如果放置在swiper-container外面，需要自定义样式。-->
     <div class="mint-swipe-indicators"><div class="mint-swipe-indicator"></div><div class="mint-swipe-indicator is-active"></div><div class="mint-swipe-indicator"></div><div class="mint-swipe-indicator"></div></div>
      </div>
     </div>
      <!-- swiper end -->
      <!-- home_menu  start-->
      <div class="mean">
        <div class="home_menu_item">
          <router-link to="/Send" style="text-decoration: none;">
          <img src="../../../public/tupi/sy.png" alt="">
          <p>发送表</p>
          </router-link>
        </div>
        <div class="home_menu_item">
          <router-link to="/Classfiy" style="text-decoration: none;">
          <img src="../../../public/tupi/classify.png" alt="">
          <p>分类</p>
          </router-link>
        </div>
         <div class="home_menu_item">
          <router-link to="/Ranking" style="text-decoration: none;">
          <img src="../../../public/tupi/bangdan.png" alt="">
          <p>榜单</p>
          </router-link>
        </div>
        <div class="home_menu_item">
          <router-link to="/End" style="text-decoration: none;">
          <img src="../../../public/tupi/end.png" alt="">
          <p>完结</p>
          </router-link>
        </div>
      </div>
       <!-- home_menu end-->
       <!-- 列表 start-->
       <div class="recommend_block">
          <div class="home_recommend_header">
            <div class="home_recommend_title">
              <img src="../../../public/tupi/xtb.png" alt="">
              精品佳作<div>
         </div>
       </div>
       <div class="home_recommend_more">更多&gt;</div>
       </div>
        <!-- 列表 end-->
       <div class="home_recommend_comics threeClassic">
          <div  class="home_recommend_comic">
              <div class="comic_cover_container" style="width: 100%;">
                <img src="https://img.manhua.weibo.com/client/2020/02/20/jYtS6IyR.jpg">
                <div class="comic_cover_info">
                <div class="comic_cover_titleBox">
                  <div class="comic_cover_title" style="font-size: 14px;">万界仙踪
                  </div>
                  <div class="comic_cover_desc" style="font-size: 12px;">传说中的仙魔道场
                  </div>
                </div>
                </div>
              </div>
          </div>
          <div class="home_recommend_comic">
            <div class="onetow">
               <div class="comic_cover">
            <img src="https://img.manhua.weibo.com/client/2020/02/20/ytCi4VIH.jpg" alt=""/>
          <div class="comic_cover_info">
          <div  class="comic_cover_titleBox">
          <div class="comic_cover_title" style="font-size: 14px;">女权世界的男剑仙
            </div>
          <div class="comic_cover_desc" style="font-size: 12px;">第36任男友的逆袭之路
            </div>
          </div>
          </div>
          </div>
          <!-- 右边的start -->
            <div class="comic_cover">
            <img src="https://img.manhua.weibo.com/client/2020/02/11/6RB4N1iT.jpg" alt=""/>
          <div class="comic_cover_info">
          <div  class="comic_cover_titleBox">
          <div class="comic_cover_title" style="font-size: 14px;">桃花宝典
            </div>
          <div class="comic_cover_desc" style="font-size: 12px;">快来救救这个八世童男！
            </div>
          </div>
          </div>
          </div>
          <!-- 右边的end -->
            </div>
      <!-- 列表 start-->
       <div class="recommend_block">
          <div class="home_recommend_header">
            <div class="home_recommend_title">
              <img src="../../../public/tupi/xtb.png" alt="" style="width: 20%">
              人气作品<div>
         </div>
       </div>
       <div class="home_recommend_more">更多&gt;</div>
       </div>
        <!-- 列表 end-->
         <!-- 列表 四个的图片end-->
       <div class="home_recommend_comics threeClassic" style="padding: 0px;">
          <div class="home_recommend_comic">
            <div class="onetow">
               <div class="comic_cover">
            <img src="https://img.manhua.weibo.com/client/2020/02/11/PnxUaTGW.jpg" alt=""/>
          <div class="comic_cover_info">
          <div  class="comic_cover_titleBox">
          <div class="comic_cover_title" style="font-size: 14px;">女权世界的男剑仙
            </div>
          <div class="comic_cover_desc" style="font-size: 12px;">第36任男友的逆袭之路
            </div>
          </div>
          </div>
          </div>
          <!-- 右边的start -->
            <div class="comic_cover">
            <img style="margin-left: 8px" src="https://img.manhua.weibo.com/client/2020/02/11/cHmb5D6p.jpg" alt=""/>
          <div class="comic_cover_info">
          <div  class="comic_cover_titleBox">
          <div class="comic_cover_title" style="font-size: 14px;">桃花宝典
            </div>
          <div class="comic_cover_desc" style="font-size: 12px;">快来救救这个八世童男！
            </div>
          </div>
          </div>
           </div>
          </div>
            <div class="onetow">
               <div class="comic_cover">
            <img src="https://img.manhua.weibo.com/client/2020/02/11/GqyF0v50.jpg" alt=""/>
          <div class="comic_cover_info">
          <div  class="comic_cover_titleBox">
          <div class="comic_cover_title" style="font-size: 14px;">女权世界的男剑仙
            </div>
          <div class="comic_cover_desc" style="font-size: 12px;">第36任男友的逆袭之路
            </div>
          </div>
          </div>
          </div>
          <!-- 右边的start -->
            <div class="comic_cover">
            <img style="margin-left: 8px" src="https://img.manhua.weibo.com/client/2020/02/11/xHL87Qve.png" alt=""/>
          <div class="comic_cover_info">
          <div  class="comic_cover_titleBox">
          <div class="comic_cover_title" style="font-size: 14px;">桃花宝典
            </div>
          <div class="comic_cover_desc" style="font-size: 12px;">快来救救这个八世童男！
            </div>
          </div>
          </div>
          </div>
          <!-- 右边的end -->
          <!-- 四个的图片end -->
          </div>
          </div>
            </div>
          </div>
       </div>
       <!-- more start-->
       <!-- 列表 start-->
       <div class="recommend_block"  style="width:100%">
          <div class="home_recommend_header" style="margin:4px 0px 0px;width:100%;padding:0px">
            <div class="home_recommend_title">
              <img src="../../../public/tupi/xtb.png" alt="" >
              最新上架
              </div>
              <div class="home_recommend_more" style="margin-left: 140px">更多&gt;
            </div>
       </div>
        <!-- 列表 end-->
       <!-- more end-->
    </div>
    </div>
    </div>
    </div>
    </main>
  </div>
</template>
<script>
// 引入swiper的核心
import Swiper from 'swiper'
// 引入swiper的样式当前的项目不能使用less,因为这里配置的是支持scss的语法 这里是npm下载的不需要使用@符号
import '../../../node_modules/swiper/css/swiper.css'
export default {
  name: 'Home',
  mounted () {
    /* eslint-disable */
    console.log(document.querySelector('.swiper-container'))
    new Swiper(".swiper-container", {
      loop: true, // 循环模式选项
      autoplay: true, //等同于以下设置
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      }
    });
    /* eslint-disable */
  },
  data() {
    return {
      // 需要使用什么的数据,考虑哪些点
      // 数据放在那里 data?props?computed?state?geeter
      // 数据的格式 string?object?number?array?
      // 只在首页中
      bannerList: [],
      recommendList: [],
      num: ""
    };
  },
  methods: {
    getBanner() {
      // getBanner作用域当前组件的代理函数
      getBanner()
        .then(res => {
          // 从api的请求接口的方法getBanner作用域
          // console.log(res) 因为response.data的数据,就是一个对象
          // 漫画岛有code的字段。这个字段是200。这个接口是可以的
          if (res.code === 200) {
            // ok
            this.bannerList = res.info;
          } else {
            // 不OK,就报错
            alert(res.code_msg);
          }
        })
        .catch(() => {
          alert("网络异常,请稍后重试");
          // console.log(err)不使用会报错 如handle-callback-err
        });
    },
    getIndexRecommend() {
      getIndexRecommend()
        .then(res => {
          if (res.code === 200) {
            this.recommendList = res.info;
            console.log(res.info);
          } else {
            console.log(res.code_msg);
          }
        })
        .catch(err => {
          console.log(err);
          alert("网络请求错误,重新请求");
        });
    },
    // 接受一个字符串,上面传来的方法,查看有没有bUg,看图片有没有空的字符串
    getImg(data) {
      // console.log(data)
      console.log(data.bigbook_name);
      console.log(data.extension);
      console.log("==========");
      // 用一个空白的字符串JSON.parse会报错
    },
    getnum(data) {
      return Number((this.num = data / 100000000)).toFixed(2);
    },
    goto() {
      this.$router.push('/search')
    }
  }
};
</script>
<style lang="scss">
// 定义好样式后面直接调用即可
@mixin bgc() {
  background-color: #fff;
}
@mixin img() {
  img {
    width: 22px;
    height: 22px;
    margin-top: 2px;
  }
}
@mixin bigimg() {
  img {
    width: 100%;
  }
}
.page-home {
  .swipeContainer{
  padding-top: 8px;
  margin: 0 16px 0 16px;
  background: #fff;
  }
  height: 100%;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  background-color: #f8f8f8;
  router-link{
  text-decoration: none;
  }
  main {
    flex: 1;
    overflow: auto;
  }
  .nav {
    height: 37.53px;
    border-bottom: 1px solid gainsboro;
    display: flex;
    width: 100%;
    justify-content: space-between; // 两端距离一样
    // align-content: center;
    align-items: center;
    line-height: 37.53px;
    @include bgc; // 直接调用直接定义的样式
    .nav_left {
      img {
        margin-left: 16px;
        width: 103px;
        height: 24px;
      }
    }
    .clr {
      width: 132px;
      height: 42px;
      display: flex; // 记得加display:flex，,否则会子级继承父级的高度
      justify-content: space-around; // 平均分配空间
      .nav_right-l {
        width: 44px;
        height: 40px;
        background: url(../../../public/tupi/title2.gif) no-repeat;
        background-size: 100% 100%;
      }
      .nav_right-m,
      .nav_right-r {
        width: 44px;
        height: 40px;
        text-align: center;
        line-height: 40px;
      }
      .iconfont {
        font-size: 26px !important;
        text-align: center;
      }
    }
  }
  .mean {
    width: 100%;
    height: 120px;
    padding: 10px 0px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @include bgc; // 直接调用直接定义的样式
    .home_menu_item {
      img {
        width: 60px;
        height: 60px;
      }
      p {
        font-size: 14px;
        text-align: center;
        color: #333;
      }
      // width: 25%;
    }
    // .home_content_loade {
    .swipeContainer {
      width: 375px;
      height: 214px;
      background: red;
      padding-top: 8px;
      background: hsl(0, 0%, 100%);
      display: flex;
      img {
      // width: '343px';
      // height: '214px'
      width: 100%;
      height: 100%;
      }
    }
  }
  // }
  .home_content_loaded {
    height: 20000px;
    width: 100%;
    // height: 100px;
    // display: flex;
  }
  .recommend_block {
    background: gainsboro;
  }
  .home_recommend_header {
    width: 92%;
    height: 44px;
    margin: 8px 0px 0px;
    padding: 0px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @include bgc; // 直接调用直接定义的样式
  }
  .home_recommend_title {
    width: 100px;
    height: 44px;
    font-size: 18px;
    color: #666666;
    // margin: 10px;
    margin-left: 16px;
    line-height: 44px;
    @include img; // 直接调用直接定义的样式
    display: flex;
    align-items: center;
  }
  .home_recommend_more {
    width: 42px;
    height: 20px;
    background: #4a90e2;
    text-align: center;
    line-height: 20px;
    border-radius: 10px;
    font-size: 12px;
    color: #ffffff;
  }
  .home_recommend_comics {
    padding: 0 16px;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background: #fff;
    .home_recommend_comic {
      max-width: 100%;
      width: 100%;
      -webkit-box-flex: 1;
      -ms-flex: auto;
      flex: auto;
      .onetow {
        display: flex;
        width: 100%;
        height: 139px;
        justify-content: space-between;
      }
      @include bigimg();
    }
    .comic_cover {
      img {
        width: 167.5px;
        height: 90px;
        border-radius: 8px;
      }
    }
  }
  .home_recommend_comic:nth-child(2) {
    //nth-child(2)选第二个div
    margin-right: 8px;
  }
}
.comic_cover_info {
  .comic_cover_titleBox {
    color: #666;
  }
  .comic_cover_desc {
    color: #999;
    margin-bottom: 6px;
  }
   router-link,a{
    text-decoration:none;
  }
}
</style>
<style lang="scss">
.swiper-container {
  width: 100%;
  // 要除以heigth/2,这里的规则
  height: 180px;
  overflow: hidden;
  img {
    width: 100%;
    height: 214px;
  }
  .swiper-pagination-bullet {
    opacity: 1;
    vertical-align: middle;
    width: 6px;
    height: 6px;
    //75/2* 0 .13333333rem=5px
    margin: 0 5px;
    border-radius: 50%;
    background-color: hsla(0, 0%, 100%, 0.7);
  }
  // 高亮
  // swiper-slide-duplicate-active不是这个不要搞错了
  // swiper-pagination-bullet-active
  // .swiper-pagination-bullet-active {
  //   width: 20px;
  //   height: 10px;
  //   // background:url("../../assets/icon/dot.png") no-repeat;
  //   background-size: 100%;
  // }
  .home_recommend_comics .threeColumn #three{
    display: flex;
  }
  .comic_cover_horizontal_info{
    width: 179px;
    height: 90px;
  }
    .swiper-pagination-bullet {
    opacity: 1;
    vertical-align: middle;
    width: 6px;
    height: 6px;
    //75/2* 0 .13333333rem=5px
    margin: 0 5px;
    border-radius: 50%;
    background-color: hsla(0,0%,100%,.7);
    z-index: 9999px
    }
    // 高亮
    // swiper-slide-duplicate-active不是这个不要搞错了
    // swiper-pagination-bullet-active
    .swiper-pagination-bullet-active {
      width: 8px;
      height: 8px;
      // background:url("../../assets/icon/dot.png") no-repeat;
      background: #F75D79;
      background-size: 100%;
      z-index: 9999px
    }
}
</style>
