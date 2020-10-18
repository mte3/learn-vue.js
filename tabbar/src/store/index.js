import Vue from 'vue'
import Vuex from 'vuex'

import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import moduleA from "./modules/moduleA";

//1.安装插件
Vue.use(Vuex)

//2.创建对象
const state = {
  num: 1000,
  moreAgeStudents:{id:1,name:'李大标',age:21},
  students:[
    {id:1,name:'李大标',age:21},
    {id:2,name:'李一标',age:23},
    {id:3,name:'李二标',age:18},
    {id:4,name:'李三标',age:11},
    {id:5,name:'李四标',age:16},
  ]
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    a:moduleA
  },
})

//3.导出store独享
export default store
