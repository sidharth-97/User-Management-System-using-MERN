import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlice";

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async function () {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header
      style={{ backgroundColor: "#252424" }}
      className="w-full h-20 flex justify-between items-center text-white px-10"
    >
    <Link to={'/'}>  <h1 className="text-4xl font-extrabold dark:text-white">
        User Management
      </h1></Link>
      <nav>
        <ul className="flex items-center list-none m-0 p-0">
          {userInfo ? (
            <>
              <div className="flex space-x-4">
                <div className="flex">
                  <img className="w-5"
                    src={
                      userInfo.image ||
                      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                    }
                    alt="User Profile"
                  />

                  <Link to={"/profile"}>
                    <span> {userInfo.name}</span>
                  </Link>
                </div>
                <button onClick={logoutHandler}>Logout</button>
              </div>
            </>
          ) : (
            <>
              <li className="mx-4">
                <Link to={"/signUp"}>Sign Up</Link>
              </li>
              <li>
                <Link to={"/login"}>Login</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
