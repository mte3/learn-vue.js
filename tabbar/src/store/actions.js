export default  {
  //进行异步操作，context：上下文
  aUpdateStudent(context,payload){
    return new Promise((resolve,reject) =>{
      setTimeout(() => {
        context.commit('updateStudent',);
        resolve('修改成功')
      },1000)
    })
  }
}
