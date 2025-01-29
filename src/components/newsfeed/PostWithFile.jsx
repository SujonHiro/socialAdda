import { useState } from "react";
import Photo from "../../assets/icons/photo.svg";
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
        className="flex gap-2 items-center my-2 bg-[#202227] px-3 py-2 cursor-pointer rounded-md"
      >
        <img
          src={Photo}
          width="15"
          height="15"
          alt=""
          className="self-center"
        />
        <span className="text-sm hover:text-blue-600">Photo</span>
      </button>
      {isModalOpen && <UploadModal onClose={toggleModal} />}
    </>
  );
}
