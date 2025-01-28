import { useState } from "react";
import { Link } from "react-router";
import User from "../../assets/images/avatars/user.jpg";
import Logo from "../../assets/img/logo.svg";
import useAuth from "../../hook/useAuth";
import Logout from "../Logout";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { auth } = useAuth();

  return (
    <header className="md:container px-4 sticky top-0 z-50 border-b border-[#141519] bg-[#000000] py-4">
      <nav className="flex items-center justify-between gap-4">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
        <div className="flex items-center basis-auto">
          <div>
            <ul className="flex gap-4 items-center">
              <li className="text-white bg-[#202227] py-1 px-3 rounded-md">
                <Link
                  to="/"
                  className="flex text-gray-400 items-center gap-2 hover:text-[#FFFFFF]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                  Home
                </Link>
              </li>
              <li className="bg-[#202227] p-2 rounded-md">
                <Link
                  to="./message.html"
                  className="text-gray-400 hover:text-[#FFFFFF]"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    height="15"
                    width="15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z"></path>
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
          <div className="relative ml-3">
            <button
              type="button"
              className="relative cursor-pointer rounded-md flex items-center bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span className="absolute"></span>
              <span className="sr-only">Open user menu</span>
              <img className="size-8 rounded-md" src={User} alt="" />
            </button>
            {isDropdownOpen && (
              <div
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right bg-[#1E1F24] rounded-md bg- py-1 shadow-lg ring-1 ring-black/5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabIndex="-1"
              >
                <Link
                  to="/me"
                  className="px-4 py-2 text-sm text-gray-300 flex items-center"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-0"
                >
                  <img className="size-8 rounded-full" src={User} alt="" />
                  <div className="flex flex-col text-gray-300">
                    <span className="ml-2 font-bold text-md">
                      {auth.user.name}
                    </span>
                    <span className="ml-2 text-xs">Web Developer</span>
                  </div>
                </Link>
                <div className="px-2">
                  <Link
                    to="/me"
                    className="flex cursor-pointer justify-center my-2 w-full shrink-0 mx-auto px-5 rounded-sm py-1 bg-[#0f6fec1a] text-blue-600 text-sm hover:bg-blue-600 hover:text-white"
                  >
                    View Profile
                  </Link>
                </div>
                <div className="border-t border-gray-200"></div>

                <Link
                  to="#"
                  className="flex items-center px-4 py-2 text-sm text-gray-300 hover:text-blue-600 font-medium"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-1"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    className="fa-fw me-2"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"></path>
                    <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"></path>
                  </svg>
                  Settings
                </Link>
                <Logout />
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
