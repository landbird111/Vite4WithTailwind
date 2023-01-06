import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/Vue',
        name: 'VueHome',
        component: () => import(`../components/VueModules/VueIndex.vue`),
        children: [
            {
                //Vue的Index頁面
                path: '',
                name: 'VueHomeIndex',
                component: () =>
                    import(
                        `../components/VueModules/VueComponents/VueHomeIndex.vue`
                    ),
            },
            {
                //Vue的WebAPI頁面
                path: 'RandomAPI',
                name: 'VueRandomAPI',
                component: () =>
                    import(
                        `../components/VueModules/VueComponents/RandomAPI/Index.vue`
                    ),
            },
        ],
    },
]

export default routes
