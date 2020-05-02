<template>
<<<<<<< HEAD
  <div class="home-tab-control">
    <div v-for="(item,index) in titles" 
        :key="index" class="tab-item"
        @click="tabControl(index)" 
        :class="{active: index === currentIndex}"
        >
      <span >{{item}}</span>
    </div>
  </div>
=======
  <div class="tab-control">
    <div class="tab-control-item" 
    v-for="(item, index) in titles"
    :key="index" 
    :class="{active: index === currentIndex}"
    @click="itemclick(index)">
      <span>{{item}}</span>
    </div>
  </div>

>>>>>>> f103f9bb3c216d8d88b4dd545be747e3e0e73a0c
</template>

<script>
export default {
<<<<<<< HEAD
=======
  name: 'TabControl',
  props: {
		  titles: {
		    type: Array,
        default() {
		      return []
        }
      }
  },
>>>>>>> f103f9bb3c216d8d88b4dd545be747e3e0e73a0c
  data() {
    return {
      currentIndex: 0
    }
  },
<<<<<<< HEAD
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

=======
  methods: {
    itemclick(index) {
      this.currentIndex = index
      this.$emit('tabClick',index)
      
    }
  }

}
</script>

<style>
  .tab-control {
    display: flex;
    height: 40px;
    text-align: center;
    font-size: 16px;
    z-index: 10;
  }
  .tab-control-item {
    flex: 1;
    height: 40px;
    line-height: 40px;
  }
  .tab-control-item span {
    padding: 5px;
    
  }
  .active {
    color: var(--color-height-text)
  }
  .active span {
    border-bottom: 3px solid var(--color-tint)
  }
>>>>>>> f103f9bb3c216d8d88b4dd545be747e3e0e73a0c
</style>