import { initGlobalState } from "qiankun";

import { reactive } from 'vue'

//父应用初始化state

const initState = reactive({
  user: {
    name: 'zhangsan'
  },
  addTest: 0,
  ignore: 'cccc',
  num: 0
})

const actions = initGlobalState(initState)

actions.onGlobalStateChange((newState, prev) => {
  console.log('main store change', newState);
  Object.keys(initState).forEach(key => {
    initState[key] = newState[key]
  })
})

//定义一个获取state的方法下发给子应用
actions.getGlobalState = key => {
  return key ? initState[key] : initState
}

export default actions