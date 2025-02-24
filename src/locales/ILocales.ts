// structure of the locales files
/**
 * define the structure of the locales files
 *
 * ILocale: the root object for output result
 * xxxPath: the path of the page
 * xxxPage: the page name of the page
 * xxx: the key of the content
 */

export interface ILocale {
    IndexPath: IndexPath
}

interface IndexPath {
    HomeIndexPage: HomeIndexPage
    NotFoundPage: NotFoundPage
    VueIndexPage: VueIndexPage
    UIIndexPage: UIIndexPage
    RandomAPIPage: RandomAPIPage
    MouseMoveCapturePage: MouseMoveCapturePage
}

interface HomeIndexPage {
    MainSubject: string
    MainContent: string
}

interface VueIndexPage {
    MainContent: string
}

interface UIIndexPage {
    MainContent: string
}

interface NotFoundPage {
    MainSubject: string
    ClickToBack: string
}

interface RandomAPIPage {
    HeaderMaster: string
    HeaderSub: string
}

interface MouseMoveCapturePage {
    HeaderMaster: string
    StandardMouseMove: string
    ReactMouseMove: string
    VueMouseMove: string
    MousePosition: string
}