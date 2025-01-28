import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import useAuth from "../hook/useAuth";
function Logout() {
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  function handleLogout() {
    localStorage.removeItem("auth");
    setAuth({});
    navigate("/login");
    toast.success("Logout Succesfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  return (
    <button
      onClick={handleLogout}
      className="flex cursor-pointer items-center px-4 py-2 text-sm text-gray-300 hover:text-blue-600 font-medium"
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
        <path d="M7.5 1v7h1V1z"></path>
        <path d="M3 8.812a5 5 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812"></path>
      </svg>
      Sign out
    </button>
  );
}

export default Logout;
