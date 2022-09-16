
import store from './globalStore'
// 微应用配置
const microApps = [
  {
    name: 'vue3Vite',
    entry: import.meta.env.VITE_SUBAPP_URL,
    activeRule: '/sub-vue',
    container: '#cnbi-viewport'
  }
]


const apps = microApps.map(item => {
  return {
    ...item,
    container: '#cnbi-viewport',//子应用挂载的dom
    props: {
      routerBase: item.activeRule,
      getGlobalState: store.getGlobalState//传递getGlobalState给子应用
    }
  }
})

export default apps