<template>
  <div>
    <h2>首页</h2>
    <h2>---------state实践--------</h2>
    <h3>{{$store.state.num}}</h3>
    <h2>---------mutations实践------</h2>
    <button @click="add">+</button>
    <button @click="sub">-</button>

    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>

    <button @click="addStudent">添加学生</button>

    <h2>---------getters实践--------</h2>
    <h3>{{$store.getters.powerNum}}</h3>
    <h3>大于20岁的学生</h3>
    <h3>{{$store.state.students}}</h3>
    <h3>{{$store.getters.student}}</h3>
    <h3>大于20岁的数量：{{$store.getters.students}}</h3>
    <li v-for="i in $store.getters.student">姓名：{{i.name}}</li>
    <h3>{{$store.getters.moreAgeStudent(22)}}</h3>
  </div>
</template>

<script>
  import {ADD1,SUB1} from "../../store/mutations-type";

  export default {
    name: "Home",
    methods: {
      add() {
        this.$store.commit(ADD1)
      },
      sub() {
        this.$store.commit(SUB1)
      },
      addCount(count){
        //payload
        //1.普通提交风格
        this.$store.commit('increment',count)

        // //2.特殊提交风格(失败操作)
        // this.$store.commit({
        //   type:'increment',
        //   count,
        // })
      },
      addStudent(){
        const stu = {id:12,name:'李小标',age:29}
        this.$store.commit('addStudent',stu)
      }
      }
    }
</script>

<style scoped>

</style>
