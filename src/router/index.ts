import {
    createRouter,
    createWebHistory,
    Router,
    RouteRecordRaw,
} from 'vue-router'
import ChildRouterIndex from './ChildRouterIndex'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../Views/HomeIndex.vue'),
    },
    ...ChildRouterIndex,
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('../Views/NotFound.vue'),
    }
]

const router: Router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
