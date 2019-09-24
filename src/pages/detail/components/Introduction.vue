<template>
  <div class="introduct">
    <div class="introduct-top">
      <div class="introduct-left">
        <div>
          <span class="left-score">4.9</span>
          <span class="left-text"> 分</span>
          <span class="left-intro">很棒</span>
        </div>
        <div class="clear"></div>
        <div>
          <span class="left-bottom">48064 条评论</span>
          <span class="left-bottom">13 条攻略</span>
        </div>
        <div class="left-arrow">></div>
      </div>
      <div class="introduct-right">
        <div>
          <span class="right-intro">景点简介</span>
        </div>
        <div class="clear"></div>
        <div>
          <span class="right-time">开放时间、贴士</span>
        </div>
        <div class="right-arrow">></div>
      </div>
    </div>
    <div class="introduct-bottom">
      <div class="bottom-icon">📍</div>
      <div class="bottom-address">辽宁省大连市沙河口区中山路 608-6-8 号（星海广场西 500 米，星海公园内）</div>
      <div class="bottom-arrow">></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailIntroduction"
}
</script>

<style lang="stylus" scoped>
  .introduct
    height 2.7rem
    border-bottom .25rem solid #f1f1f1
    .introduct-top
      margin-top .1rem
      padding-top: .1rem
      padding-bottom: .1rem
      height 1.2rem
      border-bottom .01rem solid #cccccc
      .introduct-left
        float left
        width 49%
        color #ff8300
        border-right .01rem solid #cccccc
        .left-score
          float left
          font-size .44rem
          margin-left .3rem
          line-height .7rem
        .left-text
          float left
          font-size .28rem
          margin-top .25rem
          margin-left .1rem
        .left-intro
          float left
          margin-left .2rem
          margin-top .25rem
        .clear 
          clear both
        .left-bottom
          float left
          font-size .24rem
          color #9e9e9e
          line-height .32rem
          margin-left .2rem
        .left-arrow
          float right
          color #9e9e9e
          font-size .44rem
          margin-right .3rem
          margin-top -0.3rem
      .introduct-right
        float right
        width 50%
        .right-intro
          float left
          font-size .3rem
          margin-left .3rem
          line-height .7rem
        .clear 
          clear both
        .right-time
          float left
          font-size .24rem
          color #9e9e9e
          line-height .32rem
          margin-left .3rem
        .right-arrow
          float right
          color #9e9e9e
          font-size .44rem
          margin-right .3rem
          margin-top -0.3rem
    .introduct-bottom
      height 1rem
      .bottom-icon
        float left
        width 10%
        line-height 1.3rem
        text-align center
      .bottom-address
        float left
        width 79%
        margin-top .35rem
      .bottom-arrow
        float right
        width 10%
        font-size .44rem
        color #9e9e9e
        line-height 1.3rem
        text-align center 
</style>