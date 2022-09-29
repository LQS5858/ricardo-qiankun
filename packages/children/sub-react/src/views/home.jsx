
import reactLogo from '@/assets/react.svg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function home () {
  let [count, setCount] = useState(0)
  const navigate = useNavigate()
  console.log('appname', import.meta.env.VITE_QIANKUN_NAME);
  return (
    <div className="App">
      <div onClick={() => navigate('/test')}>路由跳转</div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}