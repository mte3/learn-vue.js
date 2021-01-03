<template>
  <div>
    <h2 @click="handel">我是Profile</h2>
    <h3 @click="handel1">name : {{$route.query.name}}</h3>
    <h3 @click="handel2">age : {{$route.query.age}}</h3>
    <h3>height : {{$route.query.height}}</h3>
  </div>
</template>

<script>

  export default {
    name: "Profile",
    components: {
    },
    data() {
      return {
        a: ''
      }
    },
    methods: {
      handel() {
        this.$toast('Toast封装成功', 3000)
      },
      handel1() {
        this.$model('确定删除吗',
          '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
          this.fun,400, 300, )
      },
      fun(){
        console.log('点击了确认')
      },
      handel2(){
        this.$login(this.fun1)
      },
      fun1(){
        console.log('1111')
      }
    }
  }
</script>

<style scoped>

</style>
