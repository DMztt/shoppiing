<template>
  <div class="cart-button-bar">
    <div class="check-content">
      <check-button 
                    class="check-button" 
                    :is-checked="isSelecAll"
                    @click.native="checkClickAll"
                    />
      <span>全选</span>
    </div>
    <div class="button-price">
      合计:{{totlePrice}}
    </div>
    <div class="calculate">
      去计算({{getCartLength}})
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'
export default {
  components: {
    CheckButton
  },
  computed: {
    totlePrice() {
      return "￥" +this.$store.state.cartList.filter(item => {
        return item.checked
      }).reduce((preValue, item) => {
        return preValue + item.price * item.count
      },0).toFixed(2)
    },
    getCartLength() {
      return this.$store.state.cartList.filter(item => {
        return item.checked
      }).length
    },
    isSelecAll() {
      if(this.$store.state.cartList.length === 0) return false
      return !this.$store.state.cartList.find(item => !item.checked)
    }
  },
  methods: {
    checkClickAll() {
      if(this.getCartLength === this.$store.state.cartList.length) {
       return  this.$store.state.cartList.map(item => item.checked = false)
      }else {
        return this.$store.state.cartList.filter(item => !item.checked).forEach(item => item.checked = true)
      }
    }
  }
}
</script>

<style scoped>
.cart-button-bar {
  height: 40px;
  line-height: 40px;
  background-color: #eee;
  position: relative;
  display: flex;
  bottom: -392px;
  left: 0;
  right: 0;
  
}
.check-content {
  display: flex;
  align-items: center;
  line-height: 40px;
  margin-left: 10px;
  width: 60px;
}
.check-button {
  width: 20px;
  height: 20px;
  line-height: 20px;
}
.button-price {
 margin-left: 30px;
 flex: 1
}
.calculate {
  width: 80px;
  background-color: #f12711;
  color: #fff
}
</style>