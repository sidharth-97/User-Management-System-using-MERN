import React from 'react'
import HomeScreen from './screens/HomeScreen.jsx'
import Header from './components/Header.jsx'
import { Outlet } from 'react-router'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <>
      <Header />
      <ToastContainer/>
    <Outlet/>
    </>
  )
}

export default App