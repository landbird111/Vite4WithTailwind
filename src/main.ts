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

router.isReady().then(() => {
    //make sure router is ready before mount
    //onCreate can hook query params
    app.mount('#app')
})
