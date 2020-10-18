<template>
  <div>
    <h2>分类</h2>
    <h3>{{$store.state.num}}</h3>
    <h3>{{$store.getters.powerNum}}</h3>
    <h3>{{$store.state.students}}</h3>
    <h2>---------actions实践----------</h2>
    <h3>{{$store.state.moreAgeStudents}}</h3>
    <button @click="updateStudents">修改信息</button>
    <h2>---------modules实践----------</h2>
    <h3>{{$store.state.a.name}}</h3>
    <button @click="updateName">修改名字</button>
    <h3>{{$store.getters.fullName}}</h3>
    <h3>{{$store.getters.fullName1}}</h3>
    <h3>{{$store.getters.fullName2}}</h3>
    <button @click="aUpdateName">异步修改名字</button>

  </div>
</template>

<script>
    export default {
        name: "Category",
      methods:{
        updateStudents(){
          this.$store.dispatch('aUpdateStudent',).then(data => {
            console.log(data)
          })
        },
        updateName(){
          this.$store.commit('updateName',{name:'李四'})
        },
        aUpdateName(){
          this.$store.dispatch('aUpdateName',{name:'王五'})
        }
      }
    }
</script>

<style scoped>

</style>
