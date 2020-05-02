<template>
  <div id="home">
<<<<<<< HEAD
    <nav-bar class="home-nav"><div class="center" slot="center">购物街</div></nav-bar>
    <tab-control :titles='titles' class="tab-control" @tabClick='tabClick' 
                ref="tabTopConOffSetTop"  v-show='tabConIsShow'
                />
    <scroll class='wrapper' 
            ref="scroll" 
            :probe-type='3'
             @scroll="contentScroll"
             @pullingUp='pullUpClick'
             :pull-up-load='true'
             >
      <home-swiper :banners='banners' @homeSwiperLoad='homeSwiperLoad'/>
      <home-recommend :recommends='recommends' />
      <home-feature/>
      <tab-control :titles='titles' class="tab-control" @tabClick='tabClick' ref="tabConOffSetTop" />
      <goods-list :goods="goods[currentType].list" />
    </scroll>
    <back-top @click.native='backTopClick' v-show='isShow' />
=======
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control class="tab-contrlo"
     :titles="['流行', '新款', '精选']"
     @tabClick="tabClick"></tab-control>
    <goods-list :goods="showGoods"></goods-list>
    <ul>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
      <li>werwe</li>
    </ul>
>>>>>>> f103f9bb3c216d8d88b4dd545be747e3e0e73a0c
  </div>
</template>

<script>
<<<<<<< HEAD
import NavBar from 'components/common/navBar/NavBar'
import HomeSwiper from './childCompo/HomeSwiper'
import HomeRecommend from './childCompo/HomeRecommend'
import HomeFeature from './childCompo/HomeFeature'

import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'

import {getHomeMultiDate,getHomeGoods} from 'network/home'
import {itemListenerMixin} from 'common/mixin'

export default {
  name: 'Home',
  mixins: [itemListenerMixin],
=======
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'

import {getHomeMultidata, getHomeGoods} from 'network/home'


export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList
  },
>>>>>>> f103f9bb3c216d8d88b4dd545be747e3e0e73a0c
  data() {
    return {
      banners: [],
      recommends: [],
<<<<<<< HEAD
      titles: ['流行', '新款', '精选'],
      goods: {
        'pop': {page: 0, list:[]},
        'new': {page: 0, list:[]},
        'sell': {page: 0, list:[]}
      },
      currentType: 'pop',
      isShow: false,
      topConOffSetTop: 0,
      tabConIsShow: false,
      saveY: 0,
      itemImgLoad: null
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  created() {
    //1 请求多个数据
    this.getHomeMultiDate()

    // 2 请求homeGoods商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted() {
    // 监听图片是否加载完成
  //   let refresh = debounce(this.$refs.scroll.refresh, 500)
  //   this.itemImgLoad = () => {
  //    refresh()
  //  }
  //   this.$bus.$on('itemImageLoad',  this.itemImgLoad)
  console.log('-----')
  },
  //底部导航栏进行跳转的时候 保证再次进入Home保持停留在之前离开是位置 先刷新 还不清楚为什么这样
  activated() {
    this.$refs.scroll.refresh()
    this.$refs.scroll.scrollTo(0, this.saveY,0)
    
  },
  deactivated() {
    // console.log('deactivated')
    this.saveY = this.$refs.scroll.scroll.y
    //  console.log(this.saveY)
    //取消全局事件监听
    this.$bus.$off('itemImageLoad', this.itemImgListener)
  },
  methods: {
    getHomeMultiDate() {
      getHomeMultiDate().then(res => {
      // console.log(res);
      //保存轮播图数据 推荐数据
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type,page).then(res => {
      // console.log(res.data.list);
      this.goods[type].list.push(...res.data.list)
      this.goods[type].page += 1
    })
    },
    tabClick(index) {
      // console.log(index);
      // this.curGoodsType=Object.keys(this.goods)[index]
      switch(index) {
        case 0 :
          this.currentType = 'pop'
          break;
        case 1:
          this.currentType = 'new'
          break;
        case 2:
          this.currentType = 'sell'
          break;
      } 
      //让两个tabControl保持一致
      this.$refs.tabTopConOffSetTop.currentIndex = index
      this.$refs.tabConOffSetTop.currentIndex = index
    },
    backTopClick() {
      // console.log(this.$refs.scroll.scroll);
      // this.$refs.scroll.scroll.scrollTo(0, 0, 400);
      this.$refs.scroll.scrollTo(0, 0, 400);
      
    },
    contentScroll(position) {
      // console.log(position);
      this.isShow = -position.y > 1300 ? true : false
      this.tabConIsShow = -position.y > this.topConOffSetTop ? true : false
    },
    //上拉加载更多
    pullUpClick() {
      // console.log('上拉加载');
      this.getHomeGoods(this.currentType)
      this.$refs.scroll.finishPullUp()
    },
    // 监听轮播图是否加载完成
    homeSwiperLoad() {
      // console.log(this.$refs.tabConOffSetTop.$el.offsetTop);
      this.topConOffSetTop = this.$refs.tabConOffSetTop.$el.offsetTop
=======
      goods:{
        'pop':{page: 0, list: []},
        'news':{page: 0, list: []},
        'sell':{page: 0, list: []},
      },
      currentType: 'pop'
    }
  },
  created() {
    //1、请求多个数据
    this.getHomeMultidata()
    //2、请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('news')
    this.getHomeGoods('sell')
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  methods: {
    /****
     * 事件点击相关方法
     */
    tabClick(index) {
      // console.log(index);
      switch(index){
        case 0:
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'news';
          break;
        case 2:
          this.currentType = 'sell';
          break;
      }
    },

    // 网络请求相关方法
    getHomeMultidata() {
      getHomeMultidata().then(res => {
      // console.log(res);
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list})
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods('pop', page).then(res => {
      this.goods[type].list.push(...res.data.list)
      this.goods[type].page += 1 })
>>>>>>> f103f9bb3c216d8d88b4dd545be747e3e0e73a0c
    }
  }
}
</script>

<<<<<<< HEAD
<style scoped>
#home {
  /* padding-top: 44px; */
  height: 100vh
}
.home-nav {
  background-color: #ff8198;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
 .center {
   text-align: center;
   line-height: 44px;
   color: #fff;
   font-size: 16px;
 }
 .tab-control {
   z-index: 9;
 }
 .wrapper {
    overflow: hidden;
    position: absolute; 
    top: 44px; 
    bottom: 49px; 
    left: 0; 
    right: 0;
 }

=======
<style>
  #home {
  margin-top: 44px;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
  }
  .tab-contrlo {
    position: sticky;
    top: 44px;
    background-color: rgb(248, 245, 245);
  }
>>>>>>> f103f9bb3c216d8d88b4dd545be747e3e0e73a0c
</style>