import Vue from 'vue'
import Router from 'vue-router'
/*引入组件*/
import HelloWorld from '@/components/HelloWorld'
import TopNav from '@/components/nav/topNav.vue'
/*引入页面*/
import Login from '@/views/login/Login.vue'
import Main from '@/views/main/Main.vue'
import Home from '@/views/home/Home.vue'
import Dashboard from '@/views/workbench/Dashboard.vue'
import OtherShops from '@/views/othershops/othershops.vue'
import VedioDetail from "../views/VedioDetail/VedioDetail";
import User from '@/views/user/User.vue';
import GoodsManagement from '@/views/GoodsManagement/GoodsManagement.vue';
import Forum from '@/views/Forum/Forum.vue'
// import Mission from '@/views/workbench/mission/mission.vue'
// import Plan from '@/views/workbench/plan/plan.vue'
// import Maillist from '@/views/workbench/maillist.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    },
    {
      path: '/user',
      name: 'User',
      components: {
        default: User,
        top: TopNav,
      },
    },
    {
      path: '/home',
      type: 'home',
      name: 'home',
      redirect: '/dashboard',
      components: {
        default: Home,
        top: TopNav,
      },
      children: [
        {
          path: '/dashboard',
          name: '',
          components: {
            default: Dashboard,
            top: TopNav,
          },
          leaf: true, // 只有一个节点
          iconCls: 'iconfont icon-home', // 图标样式class
          menuShow: true
        },
      ]
    },
    {
      path: '/VedioDetail',
      name: 'VedioDetail',
      component: VedioDetail
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/othershops',
      name: '他人商品橱窗',
      component: OtherShops
    },
    {
      path: '/gm',
      name: '商品管理',
      component: GoodsManagement
    },
    {
      path: '/Forum',
      name: 'Forum',
      component: Forum
    }
  ]
})
