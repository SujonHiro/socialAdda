function ProfilePicture({ profilePicture }) {
  return (
    <>
      <div className="relative">
        <img
          src={profilePicture}
          className=" bg-cover md:size-32 mx-auto size-20 border-4 rounded-md border-white"
          alt=""
        />
      </div>
      <div className="absolute top-[55%] right-[50%] translate-x-14">
        <button className="  cursor-pointer ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-camera text-white hover:text-blue-600"
          >
            <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
            <circle cx="12" cy="13" r="3" />
          </svg>
        </button>
      </div>
    </>
  );
}

export default ProfilePicture;
