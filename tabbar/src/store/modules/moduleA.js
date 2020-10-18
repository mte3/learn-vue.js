export default {
  state:{
    name:'张三'
  },
  mutations:{
    updateName(state,payload){
      state.name = payload.name
      state.name = '王五'
    }
  },
  actions:{
    aUpdateName(context,) {
      setTimeout(() =>{
        context.commit('updateName','payload.name')
      },1000)
    }
  },
  getters:{
    fullName(state){
      return state.name+' getters成功'
    },
    fullName1(state,getters){
      return getters.fullName+' 二次getters成功'
    },
    fullName2(state,getters,rootState){
      return getters.fullName+getters.fullName1+rootState.num
    }
  },
}
