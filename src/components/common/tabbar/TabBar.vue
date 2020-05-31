<template>
    <div class="tab-bar">
      <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>

<style>
  .tab-bar {
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
<<<<<<< HEAD
    bottom: 0;
    z-index: 9;
=======
    bottom: 0
>>>>>>> f103f9bb3c216d8d88b4dd545be747e3e0e73a0c
  }
  
</style>