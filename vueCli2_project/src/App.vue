<template>
<div id="app">
<!--  <router-link to="/home" tag="button">首页</router-link>-->
<!--  <router-link to="/about">关于</router-link>-->

  <router-link to="/home" tag="button">首页</router-link>
  <router-link to="/about" tag="button">关于</router-link>
<!--  <router-link :to="'/user/'+userId" tag="button">用户</router-link>-->
<!--  <router-link :to="{path:'/profile',query:{name:'mte',age:20,height:1.88}}" tag="button">档案</router-link>-->
  <!--  <router-link to="/profile" tag="button">档案</router-link>-->
<button @click="handelUser"> 用户</button>
<button @click="handelProfile"> 档案</button>
  <keep-alive>
    <router-view></router-view>
  </keep-alive>

<!--  <button @click="handelhome">首页</button>-->
<!--  <button @click="handelabout">关于</button>-->
<!--  <button @click="handeluser">用户</button>-->

</div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      userId:'zhangsan',
    }
  },
  methods:{
    // handelhome(){
    //   this.$router.replace('/home')
    // },
    // handelabout(){
    //   this.$router.replace('/about')
    // },
    handelUser(){
      this.$router.replace('/user/'+this.userId)
    },
    handelProfile(){
      this.$router.replace({
        path:'/profile',
        query:{
          name:'mte',
          age:20,
          height:1.88
        }
      })
    }
  }
}
</script>

<style>
.active{
  color: red;
}
</style>
