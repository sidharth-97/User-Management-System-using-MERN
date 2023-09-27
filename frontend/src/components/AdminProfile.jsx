import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'

const AdminPrivateRoute= () => {
    const { adminInfo } = useSelector((state)=>state.auth)
  return adminInfo ? <Outlet/> : <Navigate to='/admin/login' replace />
}

export default AdminPrivateRoute