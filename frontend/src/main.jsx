import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import store from "./store.js";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./index.css";
import HomeScreen from "./screens/HomeScreen.jsx";
import LoginScreen from "./screens/LoginScreen.jsx";
import RegisterScreen from "./screens/RegisterScreen.jsx";
import ProfileScreen from "./screens/ProfileScreen.jsx";
import PrivateRoute from "./components/Profile.jsx";
import AdminHome from "./screens/AdminHome.jsx";
import AdminLogin from "./screens/AdminLogin.jsx";
import UserList from "./screens/UserList.jsx";
import EditUserProfile from "./screens/EditUserProfile.jsx";
import AddUser from "./screens/AddUser.jsx";
import AdminPrivateRoute from "./components/AdminProfile.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path='' element={<PrivateRoute />}>
        <Route path='/profile' element={<ProfileScreen/>}/>
      </Route>
      <Route path="/admin" element={<AdminHome />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path='' element={<AdminPrivateRoute/>}>
      <Route path="/admin/user" element={<UserList />} />
      <Route path="/admin/user-details/:id" element={<EditUserProfile />} />
        <Route path="/admin/add-user" element={<AddUser />} />
        </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
