<template>
  <div class="header-nav">
    <div @click.stop="jumpChildren">sub-vue</div>
    <div @click.stop="back">返回</div>
  </div>

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
<style lang="scss" scoped>
.header-nav {
  display: flex;
  justify-content: center;
  text-decoration: underline;
  div {
    cursor: pointer;
    margin-right: 20px;
  }
}
</style>
