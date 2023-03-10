import { RouteRecordRaw } from 'vue-router'
import HtmlRouterIndex from './UIRouterIndex'
import VueRouterIndex from './VueRouterIndex'

const routes: Array<RouteRecordRaw> = [...HtmlRouterIndex, ...VueRouterIndex]

export default routes
