import { useState } from "react";
import { Link } from "react-router";

function PostAction({ onDelete,onEdit }) {
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <div className="p-4">
      <button
        className="relative cursor-pointer"
        onClick={() => setShowDropDown(!showDropDown)}
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 16 16"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"></path>
        </svg>
      </button>
      {showDropDown && (
        <div className="absolute z-20 inset-auto translate-x-[-100px] w-32 bg-[#141519] border border-gray-800 rounded-md p-4">
          <ul className="w-full flex flex-col items-start justify-start">
            <li>
              <button
                onClick={onEdit}
                className="cursor-pointer flex justify-center text-sm items-center hover:text-blue-600 mb-3"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  className="fa-fw pe-2"
                  height="22"
                  width="22"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"></path>
                </svg>
                Edit Post
              </button>
            </li>
            <li>
              <button
               
                onClick={onDelete}
                className="flex justify-center items-center text-sm mb-3 hover:text-blue-600 cursor-pointer"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  className="fa-fw pe-2"
                  height="22"
                  width="22"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path>
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"></path>
                </svg>
                Delete Post
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default PostAction;
