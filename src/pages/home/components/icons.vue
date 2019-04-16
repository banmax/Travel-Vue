<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data (){
    return{
      iconList: [{
        id: '0001',
        imgUrl: '//gw.alicdn.com/tfs/TB1JCcHCqmWBuNjy1XaXXXCbXXa-210-126.png_110x10000.jpg_.webp',
        desc: '机票'
      }, {
        id: '0002',
        imgUrl: '//gw.alicdn.com/tfs/TB1BNE_wrZnBKNjSZFrXXaRLFXa-210-126.png_110x10000.jpg_.webp',
        desc: '火车票'
      },{
        id: '0003',
        imgUrl: '//gw.alicdn.com/tfs/TB1s51ECuOSBuNjy0FdXXbDnVXa-210-126.png_110x10000.jpg_.webp',
        desc: '酒店'
      },{
        id: '0004',
        imgUrl: '//gw.alicdn.com/tfs/TB1pN01wsUrBKNjSZPxXXX00pXa-210-126.png_110x10000.jpg_.webp',
        desc: '汽车票'
      },{
        id: '0005',
        imgUrl: '//gw.alicdn.com/tfs/TB1JCcHCqmWBuNjy1XaXXXCbXXa-210-126.png_110x10000.jpg_.webp',
        desc: '机票'
      },{
        id: '0006',
        imgUrl: '//gw.alicdn.com/tfs/TB1BNE_wrZnBKNjSZFrXXaRLFXa-210-126.png_110x10000.jpg_.webp',
        desc: '火车票'
      },{
        id: '0007',
        imgUrl: '//gw.alicdn.com/tfs/TB1s51ECuOSBuNjy0FdXXbDnVXa-210-126.png_110x10000.jpg_.webp',
        desc: '酒店'
      },{
        id: '0008',
        imgUrl: '//gw.alicdn.com/tfs/TB1pN01wsUrBKNjSZPxXXX00pXa-210-126.png_110x10000.jpg_.webp',
        desc: '汽车票'
      },{
        id: '0009',
        imgUrl: '//gw.alicdn.com/tfs/TB1aJ4MwHArBKNjSZFLXXc_dVXa-210-126.png_110x10000.jpg_.webp',
        desc: '景点门票'
      }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons >>> .swiper-container
    // overflow hidden
    height 0
    padding-bottom 40%
  .icon
    position relative
    overflow hidden
    float left
    width 25%
    height 0
    padding-bottom 20%
    .icon-img
      position absolute
      top 0
      left 0
      right 0
      bottom .33rem
      box-sizing border-box
      padding .1rem
      .icon-img-content
        display block
        margin 0 auto 
        height 100%
        width 100%
    .icon-desc
      position absolute
      left 0
      right 0
      bottom .2rem
      height .33rem
      line-height .33rem
      text-align center
      color $darkTextColor
      ellipsis()
</style>
