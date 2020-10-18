import {ADD1, SUB1} from "./mutations-type";

export default  {
  //mutations必须是同步操作，不能进行异步操作
  //修改state唯一途径
  [ADD1](state) {
    state.num++
  },
  [SUB1](state) {
    state.num--
  },
  increment(state,count){
    state.num +=count
  },
  addStudent(state,stu){
    state.students.push(stu)
  },
  updateStudent(state){
    state.moreAgeStudents.name = 'aaa'
  }
}
