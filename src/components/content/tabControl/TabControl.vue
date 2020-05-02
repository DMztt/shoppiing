<template>
  <div class="home-tab-control">
    <div v-for="(item,index) in titles" 
        :key="index" class="tab-item"
        @click="tabControl(index)" 
        :class="{active: index === currentIndex}"
        >
      <span >{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0
    }
  },
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    tabControl(index) {
     this.currentIndex = index  
     this.$emit('tabClick', index)
    }
  }
}
</script>

<style scoped>
.home-tab-control {
  display: flex;
  text-align: center;
  font-size: 16px;
  height: 40px;
  line-height: 40px;

  position: sticky;
  top: 40px;
  background-color: #fff;
  
}
.tab-item {
  flex: 1;
}
.tab-item span {
  padding: 4px  5px;
}
.active {
  color: #ff8198
}
.active span {
  border-bottom: 2px solid #ff8198
}

</style>