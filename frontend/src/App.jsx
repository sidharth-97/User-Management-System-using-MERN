import React from 'react'
import HomeScreen from './screens/HomeScreen.jsx'
import Header from './components/Header.jsx'
import { Outlet, useLocation } from 'react-router'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AdminHeader from './components/AdminHeader.jsx'

const App = () => {

  const location = useLocation()
  const isAdmin=location.pathname.startsWith('/admin')
  return (
    <>
      {isAdmin?<AdminHeader/>: <Header />}
      <ToastContainer/>
    <Outlet/>
    </>
  )
}

export default App