<template>
<<<<<<< HEAD
  <div class="goods-list" >
    <goods-list-item v-for='(item,index) in goods' :key='index' :goodsitem='item' />
=======
  <div class="goods">
   <goods-list-item v-for="item in goods" :goodsItem="item"  :key="item.id"/>
>>>>>>> f103f9bb3c216d8d88b4dd545be747e3e0e73a0c
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
<<<<<<< HEAD
export default {
  props: {
    goods: {
        type: Array,
        default() {
          return []
        }
      }
  },
  components: {
    GoodsListItem
=======

export default {
  name: 'GoodsList',
  components: {
    GoodsListItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
>>>>>>> f103f9bb3c216d8d88b4dd545be747e3e0e73a0c
  }
}
</script>

<style>
<<<<<<< HEAD
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2px;
}
=======
.goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    padding: 2px;
  }
>>>>>>> f103f9bb3c216d8d88b4dd545be747e3e0e73a0c
</style>