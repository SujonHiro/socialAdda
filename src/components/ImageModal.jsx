import { useEffect, useState } from "react";

export default function ImageModal({
  stories,
  currentIndex,
  setCurrentIndex,
  onClose,
}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev < stories.length - 1 ? prev + 1 : 0));
    }, 3000);

    const startTime = Date.now();
    interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = (elapsed / 3000) * 100;
      setProgress(Math.min(newProgress, 100));
    }, 16);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
      setProgress(0);
    };
  }, [currentIndex, setCurrentIndex, stories.length]);

  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
      <div className="absolute top-5 w-full px-4 flex gap-1">
        {stories.map((_, index) => (
          <div
            key={index}
            className="h-1 flex-1 bg-gray-500 rounded-full overflow-hidden"
          >
            {index === currentIndex && (
              <div
                className="h-full bg-white transition-all duration-100 ease-linear"
                style={{ width: `${progress}%` }}
              />
            )}
            {index < currentIndex && <div className="h-full bg-white w-full" />}
          </div>
        ))}
      </div>

      <img
        src={stories[currentIndex].image}
        alt="story"
        className="max-h-[90vh] max-w-full object-contain"
      />

      <button
        className="absolute top-1/2 -translate-y-1/2 left-5 bg-white/10  rounded-full p-2"
        onClick={() => {
          setCurrentIndex((prev) => (prev > 0 ? prev - 1 : stories.length - 1));
        }}
      >
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
          className="lucide lucide-arrow-left"
        >
          <path d="m12 19-7-7 7-7" />
          <path d="M19 12H5" />
        </svg>
      </button>

      <button
        className="absolute top-1/2 -translate-y-1/2 right-5 bg-white/10 rounded-full p-2"
        onClick={() => {
          setCurrentIndex((prev) => (prev + 1) % stories.length);
        }}
      >
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
          className="lucide lucide-arrow-right"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </button>

      <button
        className="absolute top-5 right-5  text-white text-3xl"
        onClick={onClose}
      >
        &times;
      </button>
    </div>
  );
}
