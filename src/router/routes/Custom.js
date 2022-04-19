import { lazy } from 'react'

const CustomRoutes = [
  {
    path: '/dashboard/soa',
    component: lazy(() => import('../../views/custom/index'))
  },

    {
    path: '/dashboard/plans',
    component: lazy(() => import('../../views/MyPlan/MyPlan'))
  },
  {
    path: '/dashboard/',
    component: lazy(() => import('../../views/dashboard/ecommerce')),
    exact: true
  },
]

export default CustomRoutes
