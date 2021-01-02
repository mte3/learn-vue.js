import Vue from 'vue'
import Model from "./Model";

const ModelConstructor = Vue.extend(Model)

function showModel(title, mes, w = 400, h = 300, cancel = '取消', sure = '确定') {
  const _model = new ModelConstructor({
    data() {
      return {
        w:w,
        h:h,
        isShowModel: true,
        title: title,
        cancel: cancel,
        sure: sure,
        mes: mes
      }
    }
  })
  let element = _model.$mount().$el;
  document.body.appendChild(element)
}

showModel.install = (Vue) => {
  Vue.prototype.$model = showModel
}
export default showModel
