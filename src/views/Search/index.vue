<template>
  <div class="page-search">
    <div class="search_header">
      <form method="get" action="javascript:void(0)">
        <div class="search_ferame">
          <span class="search_ferame_icon" style="display:block"></span>
          <input placeholder="请输入搜索关键字" v-model="val">
          <span :class="{search_clear_cion:val.length>0}" @click="fn1"></span>
        </div>
      </form>
      <div class="search_fix_btn">
        <span @click="goback">取消</span>
      </div>
    </div>
    <div class="search_footer">
      <div class="search_page">
        <div class="hot_search">
          <div class="hot_serch_header">
            <div class="search_title">
              热门搜索
            </div>
            <div class="search_icon refresh">
            </div>
          </div>
          <ul class="hot_search_conent">
            <li class="search_label">
              <a href="/c/71229" class="">
              爷就是开挂少女</a>
            </li>
            <li class="search_label">
              <a href="/c/71229" class="">
              爷就是开挂少女</a>
            </li>
            <li class="search_label">
              <a href="/c/71229" class="">
              我拿到的恋爱剧本不对劲！？</a>
            </li>
            <li class="search_label">
              <a href="/c/71229" class="">
              悬疑猫——大叔深夜故事集
           </a>
            </li>
            <li class="search_label">
              <a href="/c/71229" class="">
              天劫神卷</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="hot_search hosity">
         <div class="hot_serch_header">
            <div class="search_title">
              热门搜索
            </div>
            <div class="search_icon hs">
            </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Search',
  data () {
    return {
      val: ''
    }
  },
  methods: {
    goback () {
      this.$router.back()
    },
    fn1 () {
      this.val = ''
    }
  }
}
</script>
<style lang="scss">
.page-search {
  display: flex;
  height: 100%;
  flex-direction: column;
  .search_header {
    margin: 16px 16px 0px;
    display: flex;
    width: 343px;
    height: 44px;
    .search_fix_btn {
      width: 44px;
      height: 28px;
      margin: 10px 0 10px 11px;
      font-size: 14px;
      color: #666;
      text-align: center;
    }
    .search_ferame {
      align-items: center;
      width: 288px;
      height: 44px;
      background: #fff;
      border-radius: 4px;
      box-shadow: 0 0.25rem 0.75rem 0 rgba(0, 0, 0, 0.1);
      display: flex;
      input {
        flex: 1;
        background: none;
        outline: none;
        border: 0;
        padding: 4px 0px 1px;
        width: 206px;
        height: 22px;
        font-size: 14px;
        color: #666;
        vertical-align: middle;
        padding: 10px;
      }
      .search_clear_cion {
        width: 20px;
        height: 20px;
        display: block; // 一定要转换为块块,否则图片不会显示出来
        background-image: url(../../../public/tupi/cancel.png);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        margin-right: 20px;
      }
    }
  }
  form {
    width: 288px;
    height: 44px;
  }
  .search_ferame_icon {
    background-image: url(../../../public/tupi/search.png);
    width: 44px;
    height: 44px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: block;
  }
  span {
    width: 37.53px;
    height: 37.53px;
    display: block;
  }
  .active {
    display: none;
  }
  .hot_search {
    // padding: 16px 16px 24px;
    margin-left: 16px;
  }
  .hot_serch_header {
    width: 340px;
    height: 37.53px;
    display: flex;
    justify-content: space-between;
    .search_title{
      font-size: 18px;
      color: #666;
      letter-spacing: 0;
      line-height: 44px;
      font-weight: 700
    }
    .search_icon{
      width: 44px;
      height: 44px;
    }
    .refresh{
     background-image: url(../../../public/tupi/refresh.png);
     background-repeat: no-repeat;
     background-size: 100% 100%
    }
    .hs{
     background-image: url(../../../public/tupi/hs.png);
     background-repeat: no-repeat;
     background-size: 100% 100%
    }
  }
  ul{
    list-style: none;
  }
  .search_label{
    overflow: hidden;
    display: inline-block;
    vertical-align: middle;
    background: #efefef;
    border-radius: 2px;
    margin-right: 16px;
    margin-bottom: 8px;
    padding: 0px 17px;
    height: 36px;
    line-height: 36px;
    color: #666;
    font-size: 14px;
    // display: flex;
    text-decoration: none;
    display: inline-block;
    a{
      text-decoration:none;
      font-size: 12px;
      color: #666;
    }
  }
}
</style>
