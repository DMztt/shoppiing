<template>
  <nav-bar class="detail-nav">
    <div slot="left" class="left" @click="backHome"/>
    <div slot="center" class="center">
      <div  v-for="(item,index) in titles"
            :key="index" class="item-center"
            @click="navClick(index)"
            :class="{active: currentIndex === index}"
            >
            {{item}}
      </div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/navBar/NavBar'
export default {
  data() {
    return {
      titles: ['商品', '参数','评论', '推荐'],
      currentIndex: 0
    }
  },
  components: {
    NavBar
  },
  methods: {
    navClick(index) {
    this.currentIndex = index;
    this.$emit('titleClick', index)
    },
    backHome() {
      // this.$router.go(-1)
      this.$router.push('/home')
    }
  }
  
}
</script>

<style scoped>
.center {
  display: flex;
  text-align: center;
  line-height: 44px;
  font-size: 14px;
}
.item-center {
  flex: 1
}
.active{
  color: #FF6598
}
.left {
  position: relative;
  width: 60px;
  height: 44px;
}
.left::after {
  content: '';
  position: absolute;
  top: 18px;
  left: 38px;
  width: 10px;
  height: 10px;
  border-right: 1px solid #000;
  border-bottom: 1px solid #000;
  transform: rotate(135deg); 
}




</style>