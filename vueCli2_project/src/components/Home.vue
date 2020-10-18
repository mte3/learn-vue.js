<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页，吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/mes">消息</router-link>
    <router-view></router-view>
    <h2>{{message}}</h2>
  </div>
</template>

<script>
    export default {
        name: "Home",
      data(){
        return {
          message:'你好啊',
          path:'/home/news'
        }
      },
      created() {
          //创建组件时回 调
        // document.title = '首页',
        console.log('created');

      },
      destroyed() {
          //销毁组件时回调
        console.log('destroyed')
      },
      ////activated和deactivatedz这两个函数只有
      // //在组件被保持状态使用了keep-alive时才有效
      activated() {
          //处于活跃时调用
        this.$router.push(this.path)
      },
      deactivated() {
          //不活跃时调用
      },
      beforeRouteLeave(to,form,next){

        this.path = this.$route.path;
        next()
      }
      // mounted() {
      //   //template挂载在DOM时回调
      //   console.log('mounted')
      // },
      // updated() {
      //     //界面刷新时回调
      //   console.log('updated')
      // }
    }
</script>

<style scoped>

</style>
