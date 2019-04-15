<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data() {
    return{
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'https://gw.alicdn.com/imgextra/i4/2451275650/O1CN018wA29C1rbkHajV5zq_!!2451275650.jpg_790x10000Q75.jpg_.webp'
      },{
        id: '0002',
        imgUrl: 'https://gw.alicdn.com/tfs/TB1bMBqQxjaK1RjSZKzXXXVwXXa-1125-352.jpg_790x10000Q75.jpg_.webp'
      },{
        id: '0003',
        imgUrl: 'https://gw.alicdn.com/tfs/TB1RTSsQMHqK1RjSZJnXXbNLpXa-1125-352.jpg_790x10000Q75.jpg_.webp'
      },{
        id: '0004',
        imgUrl: 'https://gw.alicdn.com/tfs/TB1ch5qQIbpK1RjSZFyXXX_qFXa-1125-352.jpg_790x10000Q75.jpg_.webp'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.15%
    background: #ccc
    .swiper-img
      width: 100%
</style>



