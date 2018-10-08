import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login'
import Dashboard from '@/components/dashboard/Dashboard'
import RouteView from '@/components/layout/RouteView'
import MenuView from '@/components/layout/MenuView'
import PageView from '@/components/layout/PageView'
import WorkPlace from '@/components/dashboard/WorkPlace'
import BasicForm from '@/components/form/BasicForm'
import StepForm from '@/components/form/StepForm'
import Product from '@/components/Product/index'
import Actuality from '@/components/Product/actuality'
import Distribution from '@/components/Product/distribution'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: '登录页',
      component: Login,
      invisible: true
    },
    {
      path: '/',
      name: '首页',
      component: MenuView,
      redirect: '/login',
      icon: 'none',
      invisible: true,
      children: [
        {
          path: '/dashboard',
          name: '行业洞察',
          component: RouteView,
          icon: 'dashboard',
          children: [
            {
              path: '/dashboard/workplace',
              name: '行业排名',
              component: WorkPlace,
              icon: 'none'
            },
            {
              path: '/dashboard/analysis',
              name: '业务排名',
              component: Dashboard,
              icon: 'none'
            },         
          ]
        },
        {
          path: '/form',
          name: '业绩纵观',
          component: PageView,
          icon: 'form',
          children: [
            {
              path: '/form/basic',
              name: '通道业务',
              component: BasicForm,
              icon: 'none'
            },
            {
              path: '/form/step',
              name: '金融产品',
              component: StepForm,
              icon: 'none'
            },
          ]
        },
        {
          path: '/product',
          name: '客群分析',
          component: Product,
          icon: 'table',
          children:[
            {
              path: '/product/actuality',
              name: '客群现状',
              component: Actuality,
              icon: 'none'
            },
            {
              path: '/product/distribution',
              name: '客群分布',
              component: Distribution,
              icon: 'none'
            }
          ]
        },
      ]
    },
  ]
})
