import { lazy } from 'react'

const ProfilePageRoutes = [
  // Dashboards
  {
    path: '/dashboard/profilepage',
    component: lazy(() => import('../../views/ProfilePage/ProfilePage'))
  }
]

export default ProfilePageRoutes
