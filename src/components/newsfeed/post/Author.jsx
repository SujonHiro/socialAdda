import User from "../../../assets/images/avatars/user.jpg";
function Author() {
  return (
    <div className="flex items-center gap-2 mb-3 p-4">
      <a
        href="#"
        className="text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
      >
        <img src={User} className="rounded-full size-10" alt="postImage" />
      </a>
      <div>
        <a href="#" className="text-sm">
          Sam Lanson
        </a>
        <p className="text-xs">4 Days ago</p>
      </div>
    </div>
  );
}

export default Author;
