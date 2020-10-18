<template>
  <tab-bar>
    <tab-bar-item path="/home" active-color="#1296db">
      <img slot="item-icon" src="~tabIcon/home.png" alt="">
      <img slot="item-icon-active" src="~tabIcon/a_home.png" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" active-color="#1296db">
      <img slot="item-icon" src="~tabIcon/other.png" alt="">
      <img slot="item-icon-active" src="~tabIcon/a_other.png" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" active-color="#1296db">
      <img slot="item-icon" src="~tabIcon/cart.png" alt="">
      <img slot="item-icon-active" src="~tabIcon/a_cart.png" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" active-color="#1296db">
      <img slot="item-icon" src="~tabIcon/user.png" alt="">
      <img slot="item-icon-active" src="~tabIcon/a_user.png" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from "./tabbar/TabBar";
  import TabBarItem from "./tabbar/TabBarItem";
    export default {
        name: "MainTabBar",
      components: {
        TabBar,
        TabBarItem
      }
    }
</script>

<style scoped>

</style>
