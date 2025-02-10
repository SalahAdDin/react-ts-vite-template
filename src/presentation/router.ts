/*
import {
  createRootRoute,
  createRoute,
  createRouter,
  lazyRouteComponent,
} from '@tanstack/react-router'

import Layout from './components/Layout'

const rootRoute = createRootRoute({
  component: Layout,
  loader: () => ({ crumb: 'Task Management' }),
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: lazyRouteComponent(() => import('./screens/Home')),
  loader: () => ({
    crumb: 'Home',
  }),
})

const editRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/edit/$id',
  component: lazyRouteComponent(() => import('./screens/Edit')),
  loader: () => ({
    crumb: 'Edit',
  }),
})

const routeTree = rootRoute.addChildren([indexRoute, editRoute])

const router = createRouter({ routeTree })
*/

const router = {};

export default router;
