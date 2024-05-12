import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header.jsx'
import MainPage from './MainPage.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <MainPage/>

    </>
  )
}

export default App
