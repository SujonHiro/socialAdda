import User from "../../assets/images/avatars/user.jpg";
function UserInfo() {
  return (
    <>
      <div className="flex items-center gap-2">
        <div className=" overflow-hidden">
          <img className="size-8 rounded-full" src={User} alt="" />
        </div>
        <div>
          <h3 className="text-md font-bold">Frances Guerrero</h3>
          <p className="inline-flex items-center text-xs font-medium text-green-500">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="text-green-500 me-1 rounded-full"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path>
            </svg>
            Online
          </p>
        </div>
      </div>
    </>
  );
}

export default UserInfo;
