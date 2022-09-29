import { useState } from 'react'
import { useRoutes, Routes, Route } from "react-router-dom";

import './App.css'
import router from '@/router/routes'

function App () {
  const element = useRoutes(router)
  return (
    <div id='App'>
      {element}
    </div >
  )
}

export default App
