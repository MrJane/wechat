<template>
  <div>
    <wx-header></wx-header>
    <div class="weui-tab__content" style="display: block;">
      <div class="weui-cells">
        <router-link to="/self" class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img src="https://sinacloud.net/vue-wechat/images/headers/header01.png" alt="" class="self-header">
          </div>
          <div class="weui-cell__bd">
            <h4 class="self-nickname">阿荡</h4>
            <p class="self-wxid">微信号: zhaohd</p>
          </div>
          <div class="weui-cell__ft">
            <!--<img src="../../assets/images/chat-info-qr.png">-->
          </div>
        </router-link>
      </div>
      <div class="weui-cells">
        <router-link to="/self" class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img src="../../assets/images/me_more-my-album.png">
          </div>
          <div class="weui-cell__bd">
            <p>相册</p>
          </div>
        </router-link>
        <router-link to="/self" class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img src="../../assets/images/me_more-my-favorites.png">
          </div>
          <div class="weui-cell__bd">
            <p>收藏</p>
          </div>
        </router-link>
        <router-link to="/self" class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img src="../../assets/images/me_more-my-bank-card.png">
          </div>
          <div class="weui-cell__bd">
            <p>钱包</p>
          </div>
        </router-link>
        <router-link to="/self" class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img src="../../assets/images/me_my-card-package-icon.png">
          </div>
          <div class="weui-cell__bd">
            <p>卡券</p>
          </div>
        </router-link>
      </div>
      <div class="weui-cells">
        <router-link to="/self/album" class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img src="../../assets/images/me_more-expression.png">
          </div>
          <div class="weui-cell__bd">
            <p>表情</p>
          </div>
        </router-link>
      </div>
      <div class="weui-cells">
        <router-link to="/self/settings" class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img src="../../assets/images/me_more-setting.png">
          </div>
          <div class="weui-cell__bd">
            <p>设置</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import wxHeader from '../WebChat/wx-header';
  import wxSearch from '../WebChat/wx-search';

  export default {
    name: "Self",
    components:{
      'wxSearch':wxSearch,
      'wxHeader':wxHeader
    }
  }
</script>

<style lang="stylus" scoped>
.weui-tab__content
  background #fbf9fe
  .weui-cells
    font-size 15px
    margin-top 15px
    .weui-cell__hd
      margin-right 10px
      img
        width 23px
        height 23px
      .self-header
        display: block;
        margin-right: 10px;
        border-radius: 4px;
        width: 60px;
        height: 60px
    .weui-cell__bd
      .self-nickname
        font-size 16px
        margin-bottom 5px
      .self-wxid
        font-size 13px

</style>
