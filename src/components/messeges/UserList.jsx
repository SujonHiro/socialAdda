function UserList({ users, onSelectedUser }) {
  return (
    <>
      <ul className="flex flex-col gap-4 scroll-smooth scrollbar-track-black scrollbar">
        {users.map((user) => (
          <li key={user.id} className="flex items-center gap-4">
            <button
              onClick={() => onSelectedUser(user)}
              className="cursor-pointer w-full flex items-center gap-4 hover:bg-blue-700 hover:bg-opacity-20 p-2 rounded-md"
            >
              <div className="overflow-hidden">
                <img
                  className="size-10 rounded-full"
                  src={user.profile_picture_url}
                  alt=""
                />
              </div>
              <div className="flex flex-col items-baseline">
                <h3 className="text-md font-bold">{user.name}</h3>
                {/* <p className="text-sm font-medium text-gray-400">
                  Frances sent a photo
                </p> */}
              </div>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default UserList;
