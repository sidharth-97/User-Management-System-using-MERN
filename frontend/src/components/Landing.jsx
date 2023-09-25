import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className='bg-gray-200 min-h-screen'>    
    <div className="pt-8 flex items-center justify-center">
    <div className="bg-white shadow-md rounded-md p-8">
      <h1 className="text-2xl font-semibold mb-4">Welcome to Our App</h1>
      <p className="text-gray-600 mb-6">Please log in or sign up to continue.</p>
      <div className="flex justify-between">
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
          Log In
        </button>
        <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300">
          Sign Up
        </button>
      </div>
    </div>
  </div>
    </div>

  )
}

export default Landing