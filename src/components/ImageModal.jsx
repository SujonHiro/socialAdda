import { useEffect, useState } from "react";

export default function ImageModal({ isOpen, onClose, image }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isOpen || !image) return;

    setProgress(0);

    let interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onClose, 300);
        }
        return prev + 1;
      });
    }, 50);

    return () => {
      clearInterval(interval);
      setProgress(0);
    };
  }, [isOpen, image, onClose]);

  if (!isOpen || !image) return null;

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
        <div className="relative   rounded-lg">
          <div className="absolute top-2 left-2 right-2 flex items-center justify-between">
            <div className="w-full ml-2 h-1 bg-gray-600 rounded-md overflow-hidden">
              <div
                className="h-full bg-white transition-all duration-100 ease-linear"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            <button
              className=" text-white cursor-pointer rounded-full p-2 text-xl "
              onClick={onClose}
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
          </div>
          <img
            src={image}
            className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-lg"
            alt="Selected Story"
          />
        </div>
      </div>
    </>
  );
}
