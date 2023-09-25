import React from 'react'
import HomeScreen from './screens/HomeScreen.jsx'
import Header from './components/Header.jsx'
import { Outlet } from 'react-router'

const App = () => {
  return (
    <>
      <Header/>
    <Outlet/>
    </>
  )
}

export default App