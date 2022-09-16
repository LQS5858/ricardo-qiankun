import { createApp } from 'vue'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper';
import App from './App.vue'
import pinia from '@/stores'
import { createWebHistory, createRouter } from 'vue-router'
import routes from './router/routes'
import './assets/main.css'

// function setDomain () {
//   window.ISNK = document.domain.indexOf('172') > -1
//   window.ORIGIN = process.env.NODE_ENV === 'development' ?
//     process.env.VITE_ORIGIN_DEV : window.ISNK ?
//       process.env.VITE_ORIGIN_PRO :
//       process.env.VITE_ORIGIN_PRO_TEST

// }
// setDomain()

let router = null
let instance = null
let history = null


function render (props = {}) {
  const { container, onGlobalStateChange, setGlobalState, getGlobalState, routerBase } = props || {}
  history = createWebHistory(qiankunWindow.__POWERED_BY_QIANKUN__ ? routerBase : import.meta.env.BASE_URL)
  router = createRouter({
    history,
    routes
  })
  instance = createApp(App)
  instance.use(router)
  instance.use(pinia)

  instance.config.globalProperties.$onGlobalStateChange = onGlobalStateChange
  instance.config.globalProperties.$setGlobalState = setGlobalState
  instance.config.globalProperties.$getGlobalState = getGlobalState
  instance.config.globalProperties.$isQiankun = qiankunWindow.__POWERED_BY_QIANKUN__
  instance.mount(container ? container.querySelector('#app') : document.getElementById('app'))


  if (qiankunWindow.__POWERED_BY_QIANKUN__) {
    console.log('我正在作为子应用运行');
  }
}

renderWithQiankun({
  mount (props) {
    console.log('viteapp mount', props);
    render(props)
  },
  bootstrap () {
    console.log('bootstrap');
  },
  unmount (props) {
    console.log('vite被卸载了');
    instance.unmount()
    if (instance.__container) {
      instance.__container.innerHTML = ''
    }
    history.destroy()
    router = null
    instance = null
  }
})

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render()
}




