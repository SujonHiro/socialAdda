import { useState } from "react";
import UploadVideoModal from "../../UploadVideoModal";
function PostWithVideo() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <button
        onClick={toggleModal}
        className="flex  items-center my-2 hover:bg-[#202227]  px-4 py-2 cursor-pointer rounded-md"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 16 16"
          className="text-info pe-2"
          height="20"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0"></path>
          <path d="M9 6a3 3 0 1 1 0-6 3 3 0 0 1 0 6"></path>
          <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path>
        </svg>
        Video
      </button>
      {isModalOpen && <UploadVideoModal onClose={toggleModal} />}
    </>
  );
}

export default PostWithVideo;
