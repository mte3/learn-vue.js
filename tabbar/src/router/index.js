import Vue from 'vue'
import VueRouter from 'vue-router'


const Home = () => import('../pages/home/Home')
const Category = () => import('../pages/category/Category')
const Cart = () => import('../pages/cart/Cart')
const Profile = () => import('../pages/profile/Profile')
//1.安装插件
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:Category
  },{
    path:'/cart',
    component:Cart
  },{
    path:'/profile',
    component:Profile
  },
]

//2.引用路由对象
const  router = new VueRouter({
  routes,
  mode:'history'
})

//导出router
export default router

