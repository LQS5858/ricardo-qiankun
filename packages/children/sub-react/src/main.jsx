import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import router from './router/routes'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper';

import { RouterProvider } from 'react-router-dom'


console.log('env', process.env.NODE_ENV, import.meta.env.BASE_URL);

function storeTest (props) {
  props.onGlobalStateChange &&
    props.onGlobalStateChange(
      (value, prev) =>
        console.log(
          `[onGlobalStateChange - ${props.name}]:`,
          value,
          prev,
        ),
      true,
    );
  props.setGlobalState &&
    props.setGlobalState({
      ignore: props.name,
      user: {
        name: props.name,
      },
    });
}

function render (props) {
  const { container, routerBase } = props || {}
  let target = container ? container.querySelector('#root') : document.querySelector('#root')
  const app = ReactDOM.createRoot(target)
  app.render(
    <BrowserRouter basename={qiankunWindow.__POWERED_BY_QIANKUN__ ? routerBase : import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>)
}




// // some code
renderWithQiankun({
  bootstrap () {
    console.log('[react] react app bootstraped');
  },
  mount (props) {
    console.log('[react] props from main framework', props);
    render(props);
    storeTest(props);
  },
  update: function (props) {
    throw new Error('Function not implemented.');
  },
  unmount () {
    if (app) {
      app.unmount();
      app = null;
    }
  },
});

// render when run alone
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render();
}


