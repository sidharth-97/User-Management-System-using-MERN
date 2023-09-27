import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AdminHome = () => {
  const { adminInfo } = useSelector((state)=>state.auth)
  return (
    <div className="bg-gray-200 min-h-screen flex flex-col items-center pt-8">
      <div className="bg-white shadow-md rounded-md p-8 text-center">
        <h1 className="text-2xl font-semibold mb-4">Welcome Admin</h1>
        {
          adminInfo?(  <Link to="/admin/user">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
            Manage Users
          </button>
        </Link>):(
        <Link to="/admin/user">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
            Login
          </button>
        </Link>)
}
      
      </div>
    </div>
  );
};

export default AdminHome;
