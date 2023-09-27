import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useAdminLogoutMutation } from "../slices/adminApiSlice";
import { logoutAdmin } from "../slices/authSlice";

const AdminHeader = () => {
  const { adminInfo } = useSelector((state) => state.auth);
console.log(adminInfo,"admin info");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useAdminLogoutMutation();
  const logoutHandler = async function () {
    try {
      await logoutApiCall().unwrap();
      dispatch(logoutAdmin());
      navigate("/admin");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <header
      style={{ backgroundColor: "#252424" }}
      className="w-full h-20 flex justify-between items-center text-white px-10"
    >
      <Link to={"/admin"}>
        <h1 className="text-4xl font-extrabold dark:text-white">ADMIN</h1>
      </Link>
      {
        adminInfo? <button onClick={logoutHandler}>Logout</button>:   <Link to={"/admin/login"}>Login</Link>
      }
    </header>
  );
};

export default AdminHeader;
