 <template>
  <div class="page-end">
    <div class="nav_layout">
     <div class="left">
       <router-link to="/Home" style="text-decrotion:none">
         <img src="../../../public/tupi/arrow.png" alt="">
       </router-link>
     </div>
     <div class="rig">完结</div>
     <div class="rig-box"></div>
    </div>
  <div class="bar">
    <div class="end_list_box scroll">
    <div class="end_list_item">
        <div class="comic_cover_container">
          <img src="https://img.manhua.weibo.com/hcover/2018/08/22/2084322240_mGV6SQRx.jpg" alt="">
          <div class="comic_cover_info">
            <div class="comic_cover_titleBox">
              <div class="comic_cover_label">
              <div class="works_label label_bg_orange">
                <span class="works_label_text">恋爱</span>
              </div>
              </div>
              <div class="comic_cover_title" style="font-size: 16px;">
                渡灵Guarding
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
import { getIndexend } from '../../api/cartoon'
export default {
  name: 'End',
  data () {
    return {
      shuju: []
    }
  },
  methods: {
    // getIndexend () { // 定义一个方法
    //   getIndexend().then(res => {
    //     if (res.code === 200) {
    //       this.shuju = res.data.data.ending_works_list
    //       console.log(res)
    //     } else {
    //       alert('404')
    //     }
    //   }).catch(err => {
    //     alert(err, '网络请求错误')
    //   })
    // },
    getIndexend () {
      getIndexend().then(res => {
        console.log(res.data)
      })
    }
    // getIndexweek () {
    //   getIndexweek().then(res => {
    //     console.log(res)
    //   })
    // }
  },
  // mounted不能放在methods的方法中
  mounted () {
    this.getIndexend() // 一定要使用this否则,获取不到数据
    // this.getIndexweek()
  }
}
</script>
<style lang="scss">
.page-end {
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
  .end_list_box .scroll {
    overflow: auto;
    flex: 1;
  }
  .end_list_item {
    .comic_cover_container {
      margin-bottom: 8px;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      img {
        width: 100%;
        height: 211px;
      }
      .comic_cover_info {
        width: 100%;
        height: 29px;
        margin: 0 8px 0 0;
      }
      .comic_cover_titleBox {
        margin: 8px;
        display: flex;
        align-items: center;
      }
    }
  }
  .comic_cover_label {
    margin-right: 4px;
  }
  .label_bg_orange {
    background: #fc7933;
    border-radius: 2px;
    width: 32px;
    height: 16px;
    line-height: 16px;
    border: 1px solid transparent;
    box-sizing: border-box;
    font-size: 10px;
    color: #efefef;
    text-align: center;
  }
  .works_label_text {
    width: 24px;
    height: 16px;
  }
  .comic_cover_title{
    color: #666666;
  }
  .bar{
    height: 100%;
    overflow-y: auto;
  }
}
</style>
