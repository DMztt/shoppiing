<template>
<<<<<<< HEAD
  <div class="category">
   <div class="nav-bar" >
     <div class="nav"> 我是顶部的商品展示区域</div>
   </div>
   <shop-titles :titles="titles" @titleClick="titleClick" ref="titles"/>
   <shop ref="shop" @shopOpsitons="shopOpsitons" />
  </div>
</template>

<script>
import Shop from 'components/common/shop/Shop'
import ShopTitles from 'components/common/shop/ShopTitles'
export default {
  name: 'Category',
  data() {
    return {
      titles:['热卖','特色精品','精选热菜','热卖','特色精品','精选热菜'],
      shopScrollTop:[0, 300, 600, 900, 1200, 1500],
      current: 0
    }
  },
  components: {
    Shop,
    ShopTitles
  },
  mounted() {
   
  },
  methods: {
   titleClick(index) {
     this.$refs.shop.$el.scrollTo({left: 0, top: this.shopScrollTop[index],behavior: 'smooth'})
   },
  shopOpsitons(saveY) {
    // console.log(saveY)
    const Max = Number.MAX_VALUE;
    this.shopScrollTop.push(Max);

    const length = this.shopScrollTop.length;
    for( let i = 0; i < length; i++) {
      if((this.current !== i)&&(saveY >= this.shopScrollTop[i] && saveY < this.shopScrollTop[i+ 1])) {
        this.current = i
        this.$refs.titles.currentIndex = this.current
      }
    }
    
  }
  }
}
</script>
<style scoped>
.category {
  height: 100vh;
}
.nav-bar {
  width: 100%;
  border-bottom: 2px solid #333;
  height: 160px;
  margin: 20px 0;
  position: fixed;
  z-index: 10;
}
.nav {
  width: 90%;
  height: 160px;
  background-color: #ccc;
  position: fixed;
  top: 10px;
  left: 0;
  right: 0;
  padding: 10px 10px;
  margin: 0 auto;
  border-radius: 12px;
}
=======
  <h2>分类</h2>
</template>

<script>
export default {
  name: 'Category'
}
</script>

<style>

>>>>>>> f103f9bb3c216d8d88b4dd545be747e3e0e73a0c
</style>