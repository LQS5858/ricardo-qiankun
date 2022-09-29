
import { defineStore } from 'pinia'


export const useQiankun = defineStore('qiankunStore', {
  state () {
    return {
      qiankunState: {}
    }
  },
  actions: {
    saveQiankunState (data = {}) {
      this.qiankunState = data
    }
  }
})

