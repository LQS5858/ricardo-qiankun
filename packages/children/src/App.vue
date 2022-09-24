<script setup>
import { ref } from 'vue'
import { getCurrentInstance, computed } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { useQiankun } from '@/stores/modules/qiankunStore'

const { proxy } = getCurrentInstance()
const useQiankunStore = useQiankun()

let addTest = ref(0)

if (proxy.$isQiankun) {
  proxy.$onGlobalStateChange((newState, prev) => {
    useQiankunStore.saveQiankunState(newState)
    console.log('子应用监听共享状态变化>>>>', newState, prev)
  })
}

const changGlobalStore = () => {
  if (proxy.$isQiankun) {
    proxy.$setGlobalState({
      addTest: '888',
    })
  }
}
</script>

<template>
  <div>我是乾坤子应用</div>
  <div class="text">子应用显示共享store:{{useQiankunStore.qiankunState.addTest}}</div>
  <div @click.stop="changGlobalStore">改变父子应用store</div>
  <header>
    <img alt="Vue logo"
         class="logo"
         src="@/assets/logo.svg"
         width="125"
         height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.text {
  color: red;
}
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
