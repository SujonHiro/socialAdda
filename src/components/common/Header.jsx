import { useRef, useState } from "react";
import { Link } from "react-router";
import Logo from "../../assets/img/logo.svg";
import useAuth from "../../hook/useAuth";
import useProfile from "../../hook/useProfile";
import Logout from "../Logout";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropDownRef = useRef();
  const { auth } = useAuth();
  const { state } = useProfile();

  const user = state?.user ?? auth.user;

  function handleClick(event) {
    if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
      document.removeEventListener("mousedown", handleClick);
    }
  }

  function toggleDropdown() {
    if (!isDropdownOpen) {
      document.addEventListener("mousedown", handleClick);
    } else {
      document.removeEventListener("mousedown", handleClick);
    }
    setIsDropdownOpen(!isDropdownOpen);
  }

  return (
    <>
      <header className="@container px-4 sticky top-0 z-50 border-b border-[#141519] bg-[#000000] py-4">
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
            <div className="relative ml-3" ref={dropDownRef}>
              <button
                type="button"
                className="relative cursor-pointer rounded-md flex items-center bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                onClick={toggleDropdown}
              >
                <span className="absolute"></span>
                <span className="sr-only">Open user menu</span>
                <img
                  className="size-8 rounded-md"
                  src={user.profile_picture_url}
                  alt=""
                />
              </button>
              {isDropdownOpen && (
                <div
                  className="absolute right-0 z-10 mt-2 w-52 origin-top-right bg-[#1E1F24] rounded-md bg- py-1 shadow-lg ring-1 ring-black/5 focus:outline-none"
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
                    <img
                      className="size-8 rounded-full"
                      src={user.profile_picture_url}
                      alt=""
                    />
                    <div className="flex flex-col text-gray-300">
                      <span className="ml-2 font-bold text-md">
                        {user.name}
                      </span>
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

                  <Logout />
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
