import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Landing = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <div className='bg-gray-200 min-h-screen flex flex-col items-center pt-8'>
      <div className='bg-white shadow-md rounded-md p-8 text-center'>
        <h1 className='text-2xl font-semibold mb-4'>Welcome to Our App</h1>
        {userInfo ? (
          <p className='text-gray-600 mb-6'>Welcome, {userInfo.name}!</p>
        ) : (
          <p className='text-gray-600 mb-6'>Please log in or sign up to continue.</p>
        )}

        <div className='flex justify-between'>
          {userInfo ? (
            <Link to='/profile'>
              <button className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300'>
                Update Profile
              </button>
            </Link>
          ) : (
            <>
              <Link to='/login'>
                <button className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300'>
                  Log In
                </button>
              </Link>
              <Link to='/register'>
                <button className='bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300'>
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Landing;
