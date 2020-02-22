import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/admin',
      name: 'Admin',
      component: () => import('@/pages/admin/Index'),
      children: [
        {
          path: '',
          name: 'Products',
          component: () => import('@/pages/admin/Products')
        },
        {
          path: 'new',
          name: 'New',
          component: () => import('@/pages/admin/New')
        },
        {
          path: 'edit/:id',
          name: 'Edit',
          component: () => import('@/pages/admin/Edit')
        }
      ]
    },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('@/pages/Cart'),
    }
  ]
})
