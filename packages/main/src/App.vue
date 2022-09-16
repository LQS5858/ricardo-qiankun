<script setup>
import globalStore from "@/globalStore";
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const changeGlobalStore = () => {
  globalStore.setGlobalState({
    test: "7777",
  });
};
const pushSub = () => {
  router.push("/sub-vue");
};
</script>

<template>
  <!-- <div>父应用显示共享store:{{globalStore.getGlobalState('addTest')}}</div>
  <div @click.stop="pushSub">主应用跳转子应用</div>
  <div @click.stop="changeGlobalStore">改变共享store</div>
  <header>
    <img alt="Vue logo"
         class="logo"
         src="@/assets/logo.svg"
         width="125"
         height="125" />

    我是主应用
  </header> -->

  <RouterView />
  <div id="cnbi-viewport"></div>

</template>

<style scoped>
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
