<template>
  <div>头部</div>
  <div @click.stop="jumpChildren">显示子应用</div>
  <div @click.stop="back">返回</div>
  <router-view></router-view>
  <div id="cnbi-viewport"></div>
</template>
<script setup>
import { start } from "qiankun";
import { onMounted, nextTick } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const back = () => {
  router.go(-1);
};
const jumpChildren = () => {
  router.push("/home/layout/sub-vue");
};
const mountedQiankun = async () => {
  await nextTick(() => {
    if (!window.qiankunStarted) {
      window.qiankunStarted = true;
      start();
    }
  });
};
onMounted(() => {
  mountedQiankun();
});
</script>
<style lang="scss" scoped></style>
