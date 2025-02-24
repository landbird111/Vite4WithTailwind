import { ILocale } from './ILocales'

const tw: ILocale = {
    IndexPath: {
        HomeIndexPage: {
            MainSubject: 'Home首頁',
            MainContent: '取得全部元件的簡易開始',
        },
        NotFoundPage: {
            MainSubject: '404 找不到頁面',
            ClickToBack: '點擊這裡回到首頁',
        },
        VueIndexPage: {
            MainContent: 'Vue 首頁',
        },
        UIIndexPage: {
            MainContent: 'UI 首頁',
        },
        RandomAPIPage: {
            HeaderMaster: '隨機 API',
            HeaderSub: '取得隨機資料',
        },
        MouseMoveCapturePage: {
            HeaderMaster: '滑鼠移動捕捉',
            StandardMouseMove: '標準滑鼠移動',
            ReactMouseMove: 'React 滑鼠移動',
            VueMouseMove: 'Vue 滑鼠移動(debounce)',
            MousePosition: '滑鼠位置',
        },
    },
}

export { tw }
