<template>
  <div class="observe">
    <transition name="page-toggle">
      <router-view  ref="page"/>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'PageView',
 
}
</script>

<style lang="less" scoped>
 
</style>
