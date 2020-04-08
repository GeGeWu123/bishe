import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    redirect: '/video/myvideo'
  },

  {
    path: '/video',
    component: Layout,
    redirect: '/video',
    children: [{
      path: 'myvideo',
      name: 'Video',
      component: () => import('@/views/video/index'),
      meta: { title: '导学视频', icon: 'guide' }
    }]
  },

  {
    path: '/CourseSystem',
    component: Layout,
    redirect: '/courseSystem/oneSix',
    name: 'CourseSystem',
    meta: { title: '课程体系（待）', icon: 'example' },
    children: [
      {
        path: 'oneSix',
        name: 'OneSix',
        component: () => import('@/views/oneSix/index'),
        meta: { title: '一六级', icon: 'table' }
      },
      {
        path: 'oneSeven',
        name: 'OneSeven',
        component: () => import('@/views/oneSeven/index'),
        meta: { title: '一七级', icon: 'tree' }
      }
    ]
  },

  {
    path: '/educatePlan',
    component: Layout,
    redirect: '/educatePlan',
    children: [
      {
        path: 'educatePlan',
        name: 'EducatePlan',
        component: () => import('@/views/educatePlan/index'),
        meta: { title: '培养方案', icon: 'form' }
      },
      {
        path: 'educatePlanDetail',
        name: 'EducatePlanDetail',
        hidden: true,
        component: () => import('@/views/educatePlan/educatePlanDetail'),
        meta: { title: '培养方案详情', icon: '' }
      }
    ]
  },

  {
    path: '/educateDirection',
    component: Layout,
    redirect: '/educateDirection',
    children: [
      {
        path: 'educateDirection',
        name: 'EducateDirection',
        component: () => import('@/views/educateDirection/index'),
        meta: { title: '培养方向', icon: 'tree' }
      },
      {
        path: 'process',
        name: 'process',
        hidden: true,
        component: () => import('@/views/educateDirection/process'),
        meta: { title: '流程介绍', icon: '' }
      },
      {
        path: 'viewJob',
        name: 'ViewJob',
        hidden: true,
        component: () => import('@/views/educateDirection/viewJob'),
        meta: { title: '相关岗位', icon: '' }
      }
    ]
  },

  {
    path: '/graduationDirection',
    component: Layout,
    redirect: '/graduationDirection',
    children: [{
      path: 'graduationDirection',
      name: 'GraduationDirection',
      component: () => import('@/views/graduationDirection/index'),
      meta: { title: '职业规划', icon: 'nested' }
    }]
  },

  {
    path: '/customerService',
    component: Layout,
    redirect: '/customerService',
    children: [{
      path: 'customerService',
      name: 'CustomerService',
      component: () => import('@/views/customerService/index'),
      meta: { title: '智能客服', icon: 'peoples' }
    }]
  },

  // {
  //   path: '/dashboard',
  //   component: Layout,
  //   redirect: '/dashboard',
  //   children: [{
  //     path: 'dashboard',
  //     name: 'Dashboard',
  //     component: () => import('@/views/dashboard/index'),
  //     meta: { title: 'Dashboard', icon: 'dashboard' }
  //   }]
  // },

  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: '/example/table',
  //   name: 'Example',
  //   meta: { title: 'Example', icon: 'example' },
  //   children: [
  //     {
  //       path: 'table',
  //       name: 'Table',
  //       component: () => import('@/views/table/index'),
  //       meta: { title: 'Table', icon: 'table' }
  //     },
  //     {
  //       path: 'tree',
  //       name: 'Tree',
  //       component: () => import('@/views/tree/index'),
  //       meta: { title: 'Tree', icon: 'tree' }
  //     }
  //   ]
  // },

  // {
  //   path: '/form',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'Form',
  //       component: () => import('@/views/form/index'),
  //       meta: { title: 'Form', icon: 'form' }
  //     }
  //   ]
  // },

  // {
  //   path: '/nested',
  //   component: Layout,
  //   redirect: '/nested/menu1',
  //   name: 'Nested',
  //   meta: {
  //     title: 'Nested',
  //     icon: 'nested'
  //   },
  //   children: [
  //     {
  //       path: 'menu1',
  //       component: () => import('@/views/nested/menu1/index'), // Parent router-view
  //       name: 'Menu1',
  //       meta: { title: 'Menu1' },
  //       children: [
  //         {
  //           path: 'menu1-1',
  //           component: () => import('@/views/nested/menu1/menu1-1'),
  //           name: 'Menu1-1',
  //           meta: { title: 'Menu1-1' }
  //         },
  //         {
  //           path: 'menu1-2',
  //           component: () => import('@/views/nested/menu1/menu1-2'),
  //           name: 'Menu1-2',
  //           meta: { title: 'Menu1-2' },
  //           children: [
  //             {
  //               path: 'menu1-2-1',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
  //               name: 'Menu1-2-1',
  //               meta: { title: 'Menu1-2-1' }
  //             },
  //             {
  //               path: 'menu1-2-2',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
  //               name: 'Menu1-2-2',
  //               meta: { title: 'Menu1-2-2' }
  //             }
  //           ]
  //         },
  //         {
  //           path: 'menu1-3',
  //           component: () => import('@/views/nested/menu1/menu1-3'),
  //           name: 'Menu1-3',
  //           meta: { title: 'Menu1-3' }
  //         }
  //       ]
  //     },
  //     {
  //       path: 'menu2',
  //       component: () => import('@/views/nested/menu2/index'),
  //       meta: { title: 'menu2' }
  //     }
  //   ]
  // },

  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
  //       meta: { title: 'External Link', icon: 'link' }
  //     }
  //   ]
  // },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
