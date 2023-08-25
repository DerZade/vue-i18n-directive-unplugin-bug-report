import './assets/main.css'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'

const i18n = createI18n({
    locale: 'en',
    messages: {
        en: {
            global: "Global Path works!"
        }
    }
})

createApp(App).use(i18n).mount('#app')
