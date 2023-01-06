import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './css/baseStyle.css'
import App from './App.vue'
import router from './router'
import { i18n } from './plugins/i18n'

const app = createApp(App)

//增加pinia for store
app.use(createPinia())
//增加router設計
app.use(router)
//增加i18n設計
app.use(i18n)
// 全域引用naiveUI(不推薦，因為會增加頁面載入時間)
// https://www.naiveui.com/zh-CN/dark/docs/usage-sfc
// import naive from 'naive-ui'
// app.use(naive)

router.isReady().then(() => {
    //make sure router is ready before mount
    //onCreate can hook query params
    app.mount('#app')
})
