<template>
    <div class="wx-header">
      <div class="other">
        <i class="iconfont icon-tips-jia"></i>
      </div>
      <div class="center">微信</div>
    </div>
</template>

<script>
    export default {
        name: "wx-header"
    }
</script>

<style lang="stylus" scoped>
  .wx-header
    position relative
    height 45px
    background #1b1b1b
    width 100%
    line-height 45px
    .center
      text-align center
      color #fff
      font-size 17px
    .other
      position absolute
      right 16px
      font-size 16px
      color #fff
      text-align center
      font-family Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Noto Sans CJK SC, WenQuanYi Micro Hei, Arial, sans-serif
      &>.iconfont
        font-size 20px
</style>
