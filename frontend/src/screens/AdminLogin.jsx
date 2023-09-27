import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { useAdminLoginMutation } from '../slices/adminApiSlice'
import {toast} from 'react-toastify'
import { setAdminCredentials } from '../slices/authSlice'

const AdminLogin = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const [adminLogin, { isLoading }] = useAdminLoginMutation()
    
    const { adminInfo } = useSelector((state) => state.auth)
    console.log(adminInfo);
    useEffect(() => {
        if (adminInfo) {
            navigate('/admin')
        }
    }, [navigate, adminInfo])
    
    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            const res = await adminLogin({ email, password }).unwrap()
          dispatch(setAdminCredentials({ ...res }))
          navigate('/admin')
            toast.success('Login Successful')
        } catch (error) {
            toast.error(err?.data?.message || err.error);
        }
    }
  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 className="text-2xl font-semibold mb-6">Admin Sign In</h1>

      <form onSubmit={submitHandler}>
        <div class="mb-6">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div class="mb-6">
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div class="flex items-start mb-6">
          <p>Not a User ?</p>
          <Link to={"/register"}>Sign Up</Link>
        </div>
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
  )
}

export default AdminLogin