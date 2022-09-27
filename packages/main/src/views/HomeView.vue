<script setup>
import TheWelcome from "../components/TheWelcome.vue";
import { useRouter } from "vue-router";
import globalStore from "@/globalStore";

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
  <div class="text">
    父应用显示共享store:{{ globalStore.getGlobalState("addTest") }}
  </div>
  <div @click.stop="pushSub">主应用跳转子应用</div>
  <div @click.stop="changeGlobalStore">改变共享store</div>
  <header>
    <img alt="Vue logo"
         class="logo"
         src="@/assets/logo.svg"
         width="125"
         height="125" />

    我是主应用
  </header>
</template>

<style scoped lang="scss">
.text {
  color: blue;
}
</style>
