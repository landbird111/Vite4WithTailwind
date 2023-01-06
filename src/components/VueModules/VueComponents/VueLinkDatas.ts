import { IRouterLinkData } from '../../ContentNav/IContentNav'
import VueRouterDatas from '../../../router/VueRouterIndex'

//reduce router and child routers to array for display router link
const rounterLinkDatas: Array<IRouterLinkData> = VueRouterDatas.reduce(
    (accumulator: Array<IRouterLinkData>, currentValue) => {
        const childRouterLinkDatas: Array<IRouterLinkData> = []
        if (currentValue.children) {
            currentValue.children.map((child) => {
                childRouterLinkDatas.push({
                    RouterLinkName: child.name as string,
                    RouterDisplayName: child.path == '' ? 'Home' : child.path,
                })
            })

            accumulator.push(...childRouterLinkDatas)
        }
        return accumulator
    },
    []
)

export default rounterLinkDatas
