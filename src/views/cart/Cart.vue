<template>
  <div class="cart">
    <nav-bar class="nav-bar">
    <div class="center" slot="center">购物车 ( {{cartLength}} )</div>
  </nav-bar>
  <scroll class="content" ref="scroll">
    <cart-list/>
  </scroll>

  <cart-bottom-bar/>
  </div>
</template>

<script>
import NavBar from 'components/common/navBar/NavBar'
import Scroll from 'components/common/scroll/Scroll'
import CartList from './childComp/CartList'
import {mapGetters} from 'vuex'
import CartBottomBar from './childComp/CartBottomBar'


export default {
  name: 'Cart',
  components: {
    NavBar,
    CartList,
    Scroll,
    CartBottomBar
  },
  computed: {
    // cartLength() {
    //   return this.$store.state.cartList.length
    // }
    ...mapGetters(['cartLength'])
  },
  activated() {
   this.$refs.scroll.refresh();
  }
}
</script>

<style scoped>
.cart {
  height: 100vh;;
}
.nav-bar {
  background-color: #ff5777;
}
.center {
  text-align: center;
  line-height: 44px;
  color: #fff
}
.content {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;


  overflow: hidden;
}

</style>