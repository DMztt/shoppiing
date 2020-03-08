<template>
  <div id="home">
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
  </div>
</template>

<script>
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
  data() {
    return {
      banners: [],
      recommends: [],
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
    }
  }
}
</script>

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
</style>