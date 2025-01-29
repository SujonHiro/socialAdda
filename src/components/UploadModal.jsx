import { useState } from "react";
import User from "../assets/images/avatars/user.jpg";
export default function UploadModal({ onClose }) {
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleCaptionChange = (e) => {
    setCaption(e.target.value);
  };

  const handlePost = () => {
    // Handle the post logic, e.g., send data to the server
    console.log("Caption:", caption);
    console.log("File:", file);

    // Close modal after posting
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      <div className="relative bg-[#202227] rounded-lg p-6 w-xl">
        {/* Modal Content */}
        <h2 className="text-lg font-semibold mb-4 flex justify-between items-center ">
          Upload Photo{" "}
          <button
            onClick={onClose}
            className="cursor-pointer text-white text-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                fillRule="evenodd"
                d="M6.225 4.811a1 1 0 011.414 0L12 9.172l4.361-4.361a1 1 0 011.414 1.414L13.414 10.5l4.361 4.361a1 1 0 01-1.414 1.414L12 11.828l-4.361 4.361a1 1 0 01-1.414-1.414l4.361-4.361L6.225 6.225a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </h2>

        {/* Text Field */}
        <div className="">
          <div className="flex items-start gap-2">
            <img
              src={User}
              className="size-10 rounded-full shrink-0"
              alt="User ICon"
            />
            <textarea
              value={caption}
              onChange={handleCaptionChange}
              placeholder="Enter caption"
              className="w-full p-2 mb-4 border-[1px] rounded-lg focus:outline-none "
            />
          </div>

          {/* File Upload */}
          <div className=" cursor-pointer text-center flex flex-col justify-center items-center  relative min-h-auto border-2 border-dashed rounded-lg p-16 mb-4">
            <input
              type="file"
              id="file-upload"
              className="hidden"
              accept="image/*"
            />

            <label htmlFor="file-upload" className="cursor-pointer ">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                height="1em"
                className="md:text-7xl self-center "
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"></path>
                <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2M14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1M2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1z"></path>
              </svg>
            </label>

            <p>Drag here or click to upload photo.</p>
          </div>

          {/* Post Button */}
          <div className="flex gap-4 justify-end">
            <button
              onClick={onClose}
              className=" cursor-pointer flex justify-center my-2  px-5 rounded-sm py-2 bg-[#0f6fec1a] text-blue-600 text-sm hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Cancel
            </button>
            <button
              onClick={handlePost}
              className="cursor-pointer flex justify-center my-2  px-5 rounded-sm py-2  bg-blue-600 text-white text-sm hover:bg-[#0f6fec1a] hover:text-white transition-all duration-300"
            >
              Post
            </button>
          </div>
        </div>

        {/* Close Button */}
      </div>
    </div>
  );
}
