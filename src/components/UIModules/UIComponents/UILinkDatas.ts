import { IRouterLinkData } from '../../ContentNav/IContentNav'

import HtmlRouterDatas from '../../../router/UIRouterIndex'

const rounterLinkDatas: Array<IRouterLinkData> = HtmlRouterDatas.reduce(
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
