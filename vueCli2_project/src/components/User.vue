<template>
    <div>
      <h2>我是用户界面</h2>
      <p>我是用户信息，吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼</p>
      <h2>{{userId}}</h2>
      <h2>{{$route.params.userId}}</h2>
    </div>
</template>

<script>
    export default {
        name: "User",
      // created() {
      //   //创建组件时回调
      //   document.title = '用户',
      //     console.log('created')
      // },
      computed:{
          userId(){
            return this.$route.params.userId
          }
      }
    }
</script>

<style scoped>

</style>
