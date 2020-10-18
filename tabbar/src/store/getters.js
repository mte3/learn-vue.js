export default {
  //计数属性
  powerNum(state) {
    return state.num + state.num
  },
  student(state){
    //大于20岁的学生信息列表
    return state.students.filter(s => {
      return s.age >20
    })
  },
  students(state,getters){
    //大于20岁的学生的数量，即student的数组长度
    return getters.student.length
  },
  moreAgeStudent(state){
    //大于age岁的学生信息列表
    return age => {
      return state.students.filter(s => s.age>age)
    }
    //代码结果一样，箭头函数写法
    // return function (age) {
    //   return state.students.filter(s =>{
    //     return s.age>age
    //     }
    //   )
    // }
  }
}
