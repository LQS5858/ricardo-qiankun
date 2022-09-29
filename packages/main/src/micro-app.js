import store from "./globalStore";
// 微应用配置
const microApps = [
  {
    name: "vue3Vite",
    entry: import.meta.env.VITE_SUBAPP_URL,
    activeRule: "/home/layout/sub-vue",
    container: "#cnbi-viewport",
  },
  {
    name: "reactVite",
    entry: import.meta.env.VITE_SUBAPP_REACT_URL,
    activeRule: "/home/layout/sub-react",
    container: "#bi-viewport",
  },
];

const apps = microApps.map((item) => {
  return {
    ...item,
    props: {
      routerBase: item.activeRule,
      getGlobalState: store.getGlobalState, //传递getGlobalState给子应用
    },
  };
});

export default apps;
