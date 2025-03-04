import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import 'virtual:svg-icons-register'

const app = createApp(App)

app.use(ElementPlus, {
  // 国际化
  locale: zhCn,
})
app.mount('#app')
