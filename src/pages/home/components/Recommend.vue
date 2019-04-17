<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return{
      recommendList: [{
        id: '0001',
        imgUrl: '//gw.alicdn.com/bao/uploaded/i2/2680662586/TB2w6RUd25TBuNjSspcXXbnGFXa_!!2680662586.jpg_220x10000Q75.jpg_.webp',
        title: '三亚旅游5天4晚',
        desc: '亲子线路纯玩临海套房泳池别墅可升级mini商务小团'
      },{
        id: '0002',
        imgUrl: '//gw.alicdn.com/bao/uploaded/i2/2200608580872/O1CN01CPJYVf1IJPs1nt76C_!!2200608580872.jpg_220x10000Q75.jpg_.webp',
        title: '广东清远温泉度假村',
        desc: '广东清远英德宝墩湖湖山温泉度假村宝墩湖亲水别墅温泉酒店含早餐'
      },{
        id: '0003',
        imgUrl: '//gw.alicdn.com/bao/uploaded/i4/2157654808/O1CN01RnyKfA1lO6lvrzVcH_!!2157654808.jpg_220x10000Q75.jpg_.webp',
        title: '七星亚特兰蒂斯',
        desc: '全国三亚旅游5天4晚亲子自由行海景房自驾BBQ'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    margin-top .2rem
    line-height .8rem
    background #eeeeee
    text-indent .2rem
  .item
    overflow hidden
    display flex 
    height 1.9rem
    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem
    .item-info
      flex 1
      padding .1rem
      min-width 0
      .item-title
        line-height .54rem
        font-size .32rem
        ellipsis()
      .item-desc
        line-height .3rem
        font-size .25rem
        color #ccc
        ellipsis()
      .item-button
        line-height .44rem
        margin-top .3rem
        background #ff9300
        padding 0 .1rem
        border-radius .06rem
        color #ffffff
</style>
