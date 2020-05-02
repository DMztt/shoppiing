<template>
    <div class="titles">
      <div v-for="(item,index) in titles" 
          :key="index" 
          class="titles-item"
          @click="titlesClick(index)"
          :class="{active: currentIndex === index}"
          >
        <div>{{item}}</div>
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
    titlesClick(index) {
      this.currentIndex = index
      this.$emit('titleClick',index)
    }
  }
}
</script>

<style scoped>
.titles {
  width: 25%;
  position: fixed;
  top: 200px;
  left: 0;
}
.titles-item {
  padding: 10px 6px;
  border-radius: 10px;
}
.active {
  background-color: #4ca2cd;
  color: #fff
}

</style>