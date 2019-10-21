/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const adminRouter = {
  path: '/admin',
  component: Layout,
  redirect: '/admin/department',
  name: 'admin',
  meta: {
    title: '信息维护',
    icon: 'edit',
   
  },
  children: [
    {
      path: 'department',
      component: () => import('@/views/admin/department'),
      name: 'department',
      meta: { title: '科室管理', noCache: true}
    },
    {
      path: 'registLevel',
      component: () => import('@/views/admin/registLevel'),
      name: 'registLevel',
      meta: { title: '挂号级别管理', noCache: true}
    },
    {
      path: 'settleCat',
      component: () => import('@/views/admin/settleCat'),
      name: 'settleCat',
      meta: { title: '结算类别管理', noCache: true }
    },
    {
      path: 'diagnosis',
      component: () => import('@/views/admin/diagnosis'),
      name: 'diagnosis',
      meta: { title: '诊断目录管理', noCache: true }
    },
    {
      path: 'non_drug',
      component: () => import('@/views/admin/non_drug'),
      name: 'non_drug',
      meta: { title: '非药品收费项目管理', noCache: true }
    },
    {
      path: 'drug',
      component: () => import('@/views/admin/drug'),
      name: 'drug',
      meta: { title: '药品管理', noCache: true }
    }
  ]
}

export default adminRouter
