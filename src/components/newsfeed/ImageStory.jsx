import { useState } from "react";
import { Link } from "react-router";
import sotry1 from "../../assets/images/stories/1.jpg";
import sotry2 from "../../assets/images/stories/2.jpg";
import sotry3 from "../../assets/images/stories/3.jpg";
import sotry4 from "../../assets/images/stories/4.jpg";
import sotry5 from "../../assets/images/stories/5.jpg";
import ImageModal from "../ImageModal";

const images = [sotry1, sotry2, sotry3, sotry4, sotry5];
function ImageStory() {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <>
      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        image={selectedImage}
      />
      <div className="flex gap-2 justify-between mb-[-1rem]">
        <div className="relative flex shadow-none">
          <div className="border-2 border-dashed bg-[#202227] h-[150px] w-[120px] md:w-[140px] text-center border-gray-700 px-4 flex items-center justify-center shadow-none rounded-md">
            <div>
              <div className="flex flex-col items-center space-y-4">
                <input
                  type="file"
                  id="file-upload"
                  className="hidden"
                  accept="image/*"
                />

                <label
                  htmlFor="file-upload"
                  className=" h-[2.5rem] w-[2.5rem] inline-flex items-center justify-center bg-[#16171b] hover:bg-[#2d2f36]  px-4 py-2  text-white font-medium rounded-full  cursor-pointer  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
                  </svg>
                </label>
                <span id="file-name" className="text-gray-600"></span>
              </div>

              <h6 className="mt-2 mb-0 text-sm">Post a Story</h6>
            </div>
          </div>
        </div>
        <div className="flex overflow-x-auto whitespace-nowrap gap-4 scroll-smooth hide-scrollbar rounded-lg">
          {images.map((image, index) => (
            <button
              key={index}
              className="w-[120px] h-[150px] rounded-lg flex-shrink-0 cursor pointer"
              onClick={() => setSelectedImage(image)}
            >
              <Link to="#">
                <span className="relative mx-auto flex flex-col items-center">
                  <img
                    src={image}
                    className="w-[120px] h-[150px] rounded-lg"
                    alt={`Story ${index + 1}`}
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent h-1/3 "></div>
                  <span className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-sm text-white">
                    Lori Ferguson
                  </span>
                </span>
              </Link>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default ImageStory;
