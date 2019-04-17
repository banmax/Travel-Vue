<template>
  <div>
    <div class="title">主推爆款</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
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
  data () {
    return{
      recommendList: [{
        id: '0001',
        imgUrl: 'https://pics.lvjs.com.cn/pics//uploads/pc/place2/2018-10-11/1c30609f-cb1f-4879-9e16-dd50a662495f_300_200.jpg',
        title: '土耳其11日8晚经典游',
        desc: '含司导服务费，伊斯坦布尔国际品牌酒店，棉花堡温泉酒店，库萨达斯海边酒店，伊斯坦布尔特色烤鱼餐，卡帕洞穴瓦罐餐，车载 Wifi'
      },{
        id: '0002',
        imgUrl: 'https://pics.lvjs.com.cn/pics//uploads/pc/place2/2017-06-07/89c8dda6-baa5-40e2-b906-8cea258dc06c_300_200.jpg',
        title: '泰国曼谷芭堤雅沙美岛7日5晚品质游',
        desc: '2晚曼谷华美达或万豪3晚芭堤雅海景酒店，绝无自费，1天自由活动，4大人气餐厅，泰国新天地幸福摩天轮夜市，心灵渡船，古董车火车夜市'
      },{
        id: '0003',
        imgUrl: 'https://pics.lvjs.com.cn/pics//uploads/pc/place2/2019-03-21/a39513b3-e18b-43a8-b222-214f532b204f_300_200.jpg',
        title: '马来西亚沙巴6日4晚',
        desc: '春秋航空直飞，哥打京那巴鲁佳蓝文莱酒店 Nexus Resort & Spa Karambunai ，拥有私人沙滩、18洞高尔夫球场，提供8间餐厅及酒吧以及数不胜数的休闲活动'
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
  .item-img-wrapper
  overflow hidden
    height 0
    padding-bottom 67%
    .item-img
      width 100%
  .item-info
    margin-bottom .1rem
    padding .1rem
    // min-width 0
    .item-title
      line-height .54rem
      font-size .32rem
      ellipsis()
    .item-desc
      line-height .3rem
      font-size .25rem
      color #ccc
      ellipsis()
</style>
