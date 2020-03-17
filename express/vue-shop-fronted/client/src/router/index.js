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
        },{
          path: 'manufacturers',
          name: 'Manufacturers',
          component: () => import('@/pages/admin/manufacturers')
        },
        {
          path: 'manufacturers/edit/:id',
          name: 'EditManufacturers',
          component: () => import('@/pages/admin/EditManufacturers')
        },
        {
          path: 'manufacturers/new',
          name: 'NewManufacturers',
          component: () => import('@/pages/admin/NewManufacturers')
        }
      ]
    },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('@/pages/Cart'),
    },
    {
      path: '/detail/:id',
      name: 'Deatil',
      component: () => import('@/pages/Detail')
    }
  ]
})
