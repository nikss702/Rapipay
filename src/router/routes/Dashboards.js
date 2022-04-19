import { lazy } from 'react'

const DashboardRoutes = [
  // Dashboards
  {
    path: '/dashboard/analytics',
    component: lazy(() => import('../../views/dashboard/analytics'))
  },
  {
    path: '/dashboard/ecommerce',
    component: lazy(() => import('../../views/dashboard/ecommerce')),
    exact: true
  },
  {
    path: '/dashboard/profilepage',
    component: lazy(() => import('../../views/ProfilePage/ProfilePage'))
  },
  {
    path: '/dashboard/myplan',
    component: lazy(() => import('../../views/MyPlan/MyPlan'))
  }
]

export default DashboardRoutes
