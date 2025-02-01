import { useState } from "react";
import UploadModal from "../UploadModal";

export default function PostWithFile() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    console.log("clicked");
  };
  return (
    <>
      <button
        onClick={toggleModal}
        className="flex  items-center my-2 hover:bg-[#202227]  px-3 py-2 cursor-pointer rounded-md"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 16 16"
          className="text-success pe-2"
          height="20"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"></path>
        </svg>
        Photo
      </button>
      {isModalOpen && <UploadModal onClose={toggleModal} />}
    </>
  );
}
