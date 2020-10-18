import Vue from 'vue'
import VueRouter from 'vue-router'
//普通导入
// import Home from "../components/Home";
// import About from "../components/About";
// import User from "../components/User";


//路由懒加载
const About = () => import('../components/About')
const User = () => import('../components/User')
const Home = () => import('../components/Home')

const HomeNews = () => import('../components/HomeNews')
const HomeMes = () => import('../components/HomeMes')
const Profile = () => import('../components/Profile')


Vue.use(VueRouter)

const  routes = [
  {
    path:'',
    redirect:'/home',
  },

  {
    path: '/home',
    component: Home,
    meta:{
      title:'首页'
    },
    children:[
      // {
      //   path:'',
      //   redirect:'news'
      // },
      {
        path:'news',
        component:HomeNews,
        meta: {
          title:'新闻'
        }
      },
      {
        path: 'mes',
        component:HomeMes,
        meta: {
          title:'信息'
        }
      }
    ]
  },

  {
    path: '/about',
    component: About,
    meta:{
      title:'关于'
    },

  },

  {
    //params(传递参数类型（单个）)
    path:'/user/:userId',
    component:User,
    meta:{
      title:'用户'
    },
  },
  {
    //query(传递参数类型（多个）对象)
    path:'/profile',
    component:Profile
  }
]

//2.创建VueRouter对象
const  router = new VueRouter({
  routes,
  mode:'history',
  linkActiveClass:'active'
})

router.beforeEach((to,from,next) => {
  next()
  //从from跳转到to
  document.title = to.matched[0].meta.title
})

//3.将路由对象传入对象
export default router
