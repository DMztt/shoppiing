<template>
  <swiper>
      <swiper-item v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" @load='swiperLoad'>
        </a>
      </swiper-item>
    </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'
export default {
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      isLoad: false
    }
  },
  components: {
    Swiper, 
    SwiperItem
  },
  methods: {
    swiperLoad() {
      // console.log('11'); 
      //这块设置一个变量 只需要发送一次事件就可以
    if(!this.isLoad) {
      this.$emit('homeSwiperLoad')
      this.isLoad = true
    }
    
      
    }
  }
}
</script>

<style scoped>

</style>