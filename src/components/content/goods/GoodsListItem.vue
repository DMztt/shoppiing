<template>
  <div class="goods-item" @click='goodsItemClick'>
    <img v-lazy="showimage" alt="" @load="imageLoad">
    <div class="goods-info">
      <p>{{goodsitem.title}}</p>
      <span class="price">{{goodsitem.price}}</span>
      <span class="collect">{{goodsitem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsitem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    //监听图片加载完成
    imageLoad() {
      this.$bus.$emit('itemImageLoad')  //使用事件总线取消图片加载

     // console.log(this.$route.path)
    //  if(this.$route.path.indexOf('/home')) {
    //     this.$bus.$emit('itemImageLoad')
    //  }
    },
    goodsItemClick() {
      // console.log('-----',this.goodsitem.iid);

      //动态路由
      this.$router.push('/detail/'+ this.goodsitem.iid)
      //query方式
    //   this.$router.push({
    //     path: '/detail',
    //     query: {
    //       iid: this.goodsitem.iid
    //     }
    //   })
    }
  },
  computed: {
    showimage() {
      return this.goodsitem.image || this.goodsitem.show.img 
    }
  }
}
</script>

<style scoped >
.goods-item {
    padding-bottom: 40px;
    position: relative;
    
    width: 46%;
  }

  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }

</style>