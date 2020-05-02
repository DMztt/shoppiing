<template>
  <div class="detail">
    <detail-nav-bar class="detail-nav" @titleClick='titleClick' ref="nav"/>
    <scroll class="content" ref="scroll" @scroll="contentScroll" :probe-type='3'>
      <detail-swiper :topimages='topImages' />
      <detail-base-info :goods='goods'/>
      <detail-shop-info :shop='shop' />
      <detail-goods-info  :detail-info='goodsinfo' @imageLoad='detailImageLoad'/>
      <detail-params-info ref="paramsinfo" :param-info='goodsparams' />
      <detail-comment-info ref="commentinfo" :comment-info='commentinfo'/>
      <goods-list ref="recommend" :goods='recommends'/> 
    </scroll>
    <detail-bottom-bar @addToCart='addToCart'/>
    <back-top v-show="isShow" @click.native="backTopClick" />
    <!-- <toast class="toast" :message="message" :isShow="show"/> -->
    
  </div>
</template>

<script>
import DetailNavBar from './childCompo/DetailNavBar'
import DetailSwiper from './childCompo/DetailSwiper'
import DetailBaseInfo from './childCompo/DetailBaseInfo'
import DetailShopInfo from './childCompo/DetailShopInfo'
import DetailGoodsInfo from './childCompo/DetailGoodsInfo'
import DetailParamsInfo from './childCompo/DetailParamsInfo'
import DetailCommentInfo from './childCompo/DetailCommentInfo'
import GoodsList from 'components/content/goods/GoodsList'
import DetailBottomBar from './childCompo/DetailBottomBar'

import {getDetail, getDetailGoods, Shop, GoodsParam, getRecommend} from 'network/detail'

import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'

import {mapActions, mapGetters} from 'vuex'
import {itemListenerMixin} from 'common/mixin'
// import Toast from 'components/common/toast/Toast'
export default {
  name: 'Detail',
  mixins: [itemListenerMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      goodsinfo: {},
      goodsparams: {},
      commentinfo: {},
      recommends: [],
      themeTops: [],
      currentIndex: 0,
      isShow: false,
      // show: false,
      // message: ''
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    Scroll,
    GoodsList,
    DetailBottomBar,
    BackTop
    // Toast
  },
  created() {
    //1 保存传入的iid
    this.iid = this.$route.params.iid
    // this.iid = this.$route.query.iid

    //2 根据iid请求对应的数据
    getDetail(this.iid).then(res => {
      // console.log(res);
      const data = res.result
      //获取顶部轮播图资料
      this.topImages = data.itemInfo.topImages
      //获取商品描述信息
      this.goods = new getDetailGoods(data.itemInfo, data.columns, data.shopInfo.services)
      //获取店铺信息
      this.shop = new Shop(data.shopInfo)
      //获取商品详情数据
      this.goodsinfo = data.detailInfo
      //获取参数信息
      this.goodsparams = new GoodsParam(data.itemParams.info, data.itemParams.rule)
      //获取评论信息
      if(data.rate.cRate !== 0) {
        this.commentinfo = data.rate.list[0]
      }
    })
    //获取推荐数据
    getRecommend().then(res => {
      // console.log(res);
      this.recommends = res.data.list
    })

  },
  mounted() {
    console.log('-----')
    this.themeTops = [];
    this.themeTops.push(0);
    this.themeTops.push(this.$refs.paramsinfo.$el.offsetTop);
    this.themeTops.push(this.$refs.commentinfo.$el.offsetTop);
    this.themeTops.push(this.$refs.recommend.$el.offsetTop);
    console.log(this.themeTops);
  },
  destroyed() {
    this.$bus.$off('itemImageLoad',  this.itemImgListener)
  },
  methods: {
    ...mapActions(['addCart']),
    
    //对详情页图片监听
    detailImageLoad() {
      //获取参数 评论 推荐的offsetTop值
      this.themeTops = [];
      this.themeTops.push(0);
      this.themeTops.push(this.$refs.paramsinfo.$el.offsetTop);
      this.themeTops.push(this.$refs.commentinfo.$el.offsetTop);
      this.themeTops.push(this.$refs.recommend.$el.offsetTop);
      console.log(this.themeTops);

      this.$refs.scroll.refresh();
      
    },
    titleClick(index) {
      // console.log(index);
      this.$refs.scroll.scrollTo(0, -this.themeTops[index], 300)
    },
    contentScroll(position) {
      const positionY = -position.y
      // console.log(positionY);
      let length = this.themeTops.length
      for (let i = 0; i < length; i++) {
        if(this.currentIndex !== i &&
        ((i < length - 1 && positionY >= this.themeTops[i] && positionY < this.themeTops[i + 1]) 
        ||(i === length - 1&&positionY >= this.themeTops[i]))) {
          // console.log(i);
          this.currentIndex = i;
          // console.log(this.$refs.nav.currentIndex);
          this.$refs.nav.currentIndex = this.currentIndex; 
        }
      }
      // BackTop 显示与隐藏
      this.isShow = positionY > 1500 ? true : false
    },
    addToCart() {
      // console.log('添加到购物车');
      //1 获取购物车展示的信息 （图片、价格、标题、介绍）
      const product = {}
      product.image = this.topImages[0];
      product.desc = this.goods.desc
      product.title = this.goods.title
      product.price = this.goods.realPrice
      product.iid = this.iid
      //2 将商品添加到购物车
      // this.$store.state.cartList.push(product)
      // this.$store.commit('addCart', product)


      // this.$store.dispatch('addCart', product).then(res => {
      //   // this.show = true;
      //   // this.message = res;
      //   // setTimeout(() => {
      //   //   this.show = false;
      //   // },1500)
      //   // console.log(res)

      //   this.$toast.show(res, 1800)
      // })

      //使用 mapActions 辅助函数将组件的 methods 映射为 store.dispatch 调用
      this.addCart(product).then(res => {
        console.log(res);
        this.$toast.show(res, 1800)
      })
    },
    //回到顶部
    backTopClick() {
      // console.log('1111111111');
      this.$refs.scroll.scrollTo(0, 0, 600)
    }
  }
}
</script>

<style scoped>
.detail {
  position: relative;
  z-index: 10;
  background-color: #fff;
  height: 100vh;
}
.detail-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  background-color: #fff;
}
.content {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0; 
  bottom: 58px;
 
  /* height: calc(100% - 44px); */
  overflow: hidden;
}

</style>