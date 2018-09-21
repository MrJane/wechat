<template>
    <li class="list-row border-1px">
      <div class="list-info">
        <div class="header-box">
          <i class="new-msg-count">3</i>
          <i class="new-msg-dot"></i>
          <img src="https://sinacloud.net/vue-wechat/images/headers/header01.png">
        </div>
        <div class="desc-box">
          <div class="desc-time">22.04</div>
          <div class="desc-author">阿汤</div>
          <div class="desc-text">
            <div class="desc-mute iconfont icon-mute"></div>
            <span class="">来啊，快活啊</span>
          </div>
        </div>
      </div>
      <div class="operator-box">
          <div class="readed">标为未读</div>
        <div class="del">删除</div>
      </div>
    </li>
</template>

<script>
    export default {
        name: "msg-list"
    }
</script>

<style lang="stylus" scoped>

  .border-1px:after
    /*解决1px问题 添加伪元素*/
    content " "
    position: absolute
    left 8px
    /*设置左边偏移*/
    bottom  0
    width 100%
    height 1px
    border-top 1px solid #e5e5e5
    color #e5e5e5
    -webkit-transform-origin 0 0
    transform-origin 0 0
    -webkit-transform scaleY(.5)
    transform scaleY(.5)
  .list-row
    height: 64px;
    position relative
    .list-info
      padding 8px
      height 64px
      background #fff
      .header-box
        position relative
        float left
        width 48px
        height 48px
        background #b3ff61
        margin-right 10px
        img
          width 100%
          border-radius 5px
        .new-msg-count
          position absolute
          right -9px
          top -5px
          color #fff
          text-align center
          width 18px
          height 18px
          border-radius 50%
          background red
          line-height 18px
      .desc-box
        overflow hidden
        .desc-time
          float right
        .desc-author
          font-size 16px
          line-height 25px
        .desc-text
          color #888
          font-size 14px
          .desc-mute
            float right

    .operator-box
      position absolute
      top 0
      right 0
      display flex
      height 100%
      background #c7c7cc
      &>div
        padding 0 12px
        font-size 16px
        color #fff
        text-align center
        line-height 64px
      .del
        background red
</style>
