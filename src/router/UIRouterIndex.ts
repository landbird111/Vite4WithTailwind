import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/Html',
        name: 'UIHome',
        component: () => import(`../components/UIModules/UIIndex.vue`),
        children: [
            {
                //UI的Index頁面
                path: '',
                name: 'UIHomeIndex',
                component: () =>
                    import(
                        `../components/UIModules/UIComponents/UIHomeIndex.vue`
                    ),
            },
            //         {
            //             //UI的Buttons頁面
            //             path: 'Buttons',
            //             name: 'UIButtons',
            //             component: () =>
            //                 import(
            //                     `../components/UIModules/UIComponents/Buttons/Index.vue`
            //                 ),
            //         },
        ],
    },
]

export default routes
