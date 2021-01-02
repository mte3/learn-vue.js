<template>
  <div>
    <h2 @click="handel">我是Profile</h2>
    <h3 @click="handel1">name : {{$route.query.name}}</h3>
    <h3>age : {{$route.query.age}}</h3>
    <h3>height : {{$route.query.height}}</h3>
    <Model/>
  </div>
</template>

<script>
  import Model from "../common/model/Model";

  export default {
    name: "Profile",
    components: {
      Model
    },
    methods: {
      handel() {
        this.$toast('Toast封装成功', 3000)
      },
      handel1(){
        this.$model('确定删除吗','啊水水水水水水水水水水水水水水水水' )
      }
    }
  }
</script>

<style scoped>

</style>
