import { useState } from "react";
import LeftSideComponents from "./LeftSideComponents";
export default function OffCanvasProfile() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOffcanvas = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Button to Open Offcanvas */}
      <button
        onClick={toggleOffcanvas}
        className="md:hidden text-gray-300  font-medium"
      >
        <div className="flex items-center">
          <span className="p-2 bg-blue-600 rounded-md me-2">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M496 384H160v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h80v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h336c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160h-80v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h336v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h80c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160H288V48c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16C7.2 64 0 71.2 0 80v32c0 8.8 7.2 16 16 16h208v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h208c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16z"></path>
            </svg>
          </span>
          <span>Profile</span>
        </div>
      </button>

      {/* Offcanvas */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#202227] shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="p-4 flex justify-between items-center ">
          <div></div>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={toggleOffcanvas}
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-2">
          <LeftSideComponents />
        </div>
      </div>
    </>
  );
}
