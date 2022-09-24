import { createApp } from "vue";
import { registerMicroApps, start, setDefaultMountApp } from "qiankun";
import App from "./App.vue";
import router from "./router";
import microApps from "./micro-app";
import pinia from "./stores";
import "./assets/main.css";

const instance = createApp(App);

instance.use(pinia);
instance.use(router);

instance.mount("#qiankun-main");

//定义loader方法，loading改变时，将变量赋值给app.vue的data中isLoading

function loader (loading) {
  if (instance.isLoading) {
    instance.isLoading = loading;
  }
}

const apps = microApps.map((item) => {
  return {
    ...item,
    loader,
  };
});

registerMicroApps(apps, {
  beforeLoad: (app) => {
    console.log("before load app.name====>>>>>", app.name);
  },
  beforeMount: [
    (app) => {
      console.log("[LifeCycle] before mount %c%s", "color: green;", app.name);
    },
  ],
  afterMount: [
    (app) => {
      console.log("[LifeCycle] after mount %c%s", "color: green;", app.name);
    },
  ],
  afterUnmount: [
    (app) => {
      console.log("[LifeCycle] after unmount %c%s", "color: green;", app.name);
    },
  ],
});

setDefaultMountApp("/sub-vue");
start();
