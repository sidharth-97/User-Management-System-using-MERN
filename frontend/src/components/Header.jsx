import { Link } from "react-router-dom";

const Header = () => {
  
    return (
        <header style={{backgroundColor: "#252424"}} className='w-full h-20 flex justify-between items-center text-white px-10'>
          
            <h1 className="text-4xl font-extrabold dark:text-white">User Management</h1>  
            <nav>
                <ul className='flex items-center list-none m-0 p-0'>
                    <li className='mx-4'>
                      <Link to={'/signUp'}>Sign Up</Link>
                    </li>
                    <li>
                        <Link to={"/login"}>Login</Link>
                    </li>
                </ul>
            </nav>     
      </header>
    )
  };
  
  export default Header;