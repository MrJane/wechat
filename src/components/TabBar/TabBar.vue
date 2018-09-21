<template>
  <nav class="navbar border-1px">
    <router-link class="navbar-item" :to="{name:'home'}" tag="div">
      <div class="iconfont icon-wechat">
      </div>
      <p class="text">微信</p>
    </router-link>
    <router-link class="navbar-item" :to="{name:'contact'}" tag="div">
      <div class="iconfont icon-contact">
      </div>
      <p class="text">通讯录</p>
    </router-link>
    <router-link class="navbar-item" :to="{name:'explore'}" tag="div">
      <div class="iconfont icon-find">
      </div>
      <p class="text">发现</p>
    </router-link>
    <router-link class="navbar-item" :to="{name:'self'}" tag="div">
      <div class="iconfont icon-me">
      </div>
      <p class="text">我</p>
    </router-link>
  </nav>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style lang="stylus" scoped>
  .border-1px
    position relative
  .border-1px:after
    /*解决1px问题 添加伪元素*/
    content " "
    position: absolute
    left 8px
    /*设置左边偏移*/
    top  0
    width 100%
    height 1px
    border-top 1px solid #e5e5e5
    color #e5e5e5
    -webkit-transform-origin 0 0
    transform-origin 0 0
    -webkit-transform scaleY(.5)
    transform scaleY(.5)
  .navbar
    position fixed
    bottom 0
    left 0
    height 50px
    width 100%
    display flex
    overflow hidden
    align-items center

    .navbar-item
      width 25%
      justify-items center
      text-align center
      .text
        font-size 12px
        transform: scale(.9);
      flex-flow 1
      .iconfont
        margin 0 auto
        height 28px
        width 28px
        font-size 28px
        margin-bottom 4px
</style>
