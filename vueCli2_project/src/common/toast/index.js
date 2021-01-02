import Vue from 'vue'

// 这里就是我们刚刚创建的那个静态组件
import Toast from './Toast'

// 返回一个 扩展实例构造器, 关于 vue.extend 有不懂的同学,
// 可以去查看以下官方文档 https://cn.vuejs.org/v2/api/#Vue-extend
const ToastConstructor = Vue.extend(Toast)

// 定义弹出组件的函数 接收2个参数, 要显示的文本 和 显示时间
function showToast(mes, duration = 2000) {

  // 实例化一个 toast.vue
  const _toast = new ToastConstructor({
    data() {
      return {
        showToast: true,
        mes: mes,
        duration: duration
      }
    }
  })
  let element = _toast.$mount().$el;
  // 把 实例化的 toast.vue 添加到 body 里
  document.body.appendChild(element)

  // 过了 duration 时间后隐藏整个组件
  setTimeout(() => {
    _toast.showToast = false
  }, duration)
}

// 注册为全局组件的函数
showToast.install = (Vue) => {
  Vue.prototype.$toast = showToast
}

export default showToast
