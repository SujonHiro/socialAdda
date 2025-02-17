import { Link } from "react-router";
import Connection from "../assets/icons/connection.svg";
import Home from "../assets/icons/home.svg";
import useAuth from "../hook/useAuth";
import useProfile from "../hook/useProfile";
function LeftSideComponents() {
  const { auth } = useAuth();
  const { state } = useProfile();
  const user = state?.user ?? auth?.user;
  return (
    <>
      <div
        style={{ backgroundImage: `url(${user.cover_picture_url})` }}
        className="bg-cover bg-center bg-no-repeat h-[50px] rounded-md"
      ></div>
      <div className="p-2">
        <div className="text-center">
          <div className="avatar">
            <span role="button">
              <img
                src={user.profile_picture_url}
                width="64"
                height="64"
                alt="profile"
                className="border-2 border-white object-cover rounded-md"
              />
            </span>
          </div>
          <h1 className="text-xl text-white font-bold mt-2">{user.name}</h1>

          <p className="mt-3">{user.bio}</p>
          <div className="my-4 flex flex-row justify-center gap-4 items-center self-stretch">
            <div>
              <h6 className="font-bold text-white">256</h6>
              <span>Post</span>
            </div>
            <div className="vr"></div>
            <div>
              <h6 className="font-bold text-white">2.5K</h6>
              <span>Followers</span>
            </div>
            <div className="vr"></div>
            <div>
              <h6 className="font-bold text-white">365</h6>
              <span>Following</span>
            </div>
          </div>
          <div className="border-t border-gray-100"></div>
        </div>

        <ul className="mt-4">
          <li>
            <a href="" className="flex items-center gap-4">
              <img src={Home} width="20" height="20" alt="" />
              <span className="font-bold hover:text-blue-600">Home</span>
            </a>
          </li>
          <li>
            <a href="" className="flex items-center gap-4 py-2">
              <img src={Connection} width="20" height="20" alt="" />
              <span className="font-bold hover:text-blue-600">Connection</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="border-t border-gray-700"></div>
      <div className="w-full p-4 text-center">
        <Link
          to="/me"
          className="w-full cursor-pointer px-6 py-2 bg-[#0f6fec1a] rounded-sm text-blue-600 text-sm hover:bg-blue-600 hover:text-white"
        >
          View Profile
        </Link>
      </div>
    </>
  );
}

export default LeftSideComponents;
