import Vue from 'vue'
import Router from 'vue-router'
import PageView from '@/components/layout/PageView'
import RouteView from '@/components/layout/RouteView'
import MenuView from '@/components/layout/MenuView'
import Login from '@/components/login/Login'
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
              component: () => import('@/components/dashboard/WorkPlace'),
              icon: 'none'
            },
            {
              path: '/dashboard/analysis',
              name: '业务排名',
              component: () => import('@/components/dashboard/Dashboard'),
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
              component: () => import('@/components/form/BasicForm'),
              icon: 'none'
            },
            {
              path: '/form/step',
              name: '金融产品',
              component: () => import('@/components/form/StepForm'),
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
              path: '/actuality',
              name: '客群现状',
              component: Actuality,
            },
            {
              path: '/distribution',
              name: '客群分布',
              component: Distribution,
            }
          ]
        },
      ]
    },
  ]
})
