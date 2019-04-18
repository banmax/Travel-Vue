<template>
  <div>
    <div class="title">周末去哪儿玩</div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    line-height .8rem
    background #eee
    text-indent .2rem
  .item-img-wrapper
    overflow hidden
    text-align center
    margin-top .1rem
    // height 0
    // padding-bottom 36.7%
    .item-img
      width 96%
      border-radius .2rem
  .item-info
    padding .1rem
    float top
    .item-title
      line-height .54rem
      font-size .32rem
      text-indent .2rem
      ellipsis()
    .item-desc
      line-height .4rem
      text-indent .2rem
      color #ccc
      ellipsis()
</style>
