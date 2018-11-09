<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  created (){
        this.$store.commit('setMaskingWidth',document.documentElement.clientWidth);
        this.$store.commit('setMaskingHeight',document.documentElement.clientHeight)
  }
}
</script>

<style lang="less">

@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';

body {
  background-color: #ECC8F7;
}
 html,body,#app{
   width: 100%;
   height: 100%;
} 
</style>
