import { useEffect } from "react";

export default function ImageModal({
  stories,
  currentIndex,
  setCurrentIndex,
  onClose,
}) {
  //const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev < stories.length - 1 ? prev + 1 : 0));
    }, 5000);
    return () => clearInterval(timer);
  }, [setCurrentIndex, stories.length]);

  /*  useEffect(() => {
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
  }, [isOpen, image, onClose]); */

  //if (!isOpen || !image) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="absolute top-5 w-full px-4 flex gap-1">
        {stories.map((_, index) => (
          <div
            key={index}
            className="h-1 flex-1 bg-gray-500 rounded-full overflow-hidden"
          >
            {index === currentIndex && (
              <div className="h-full bg-white animate-progress" />
            )}
          </div>
        ))}
      </div>

      <img
        src={stories[currentIndex].image}
        alt="story"
        className="max-h-[90vh] max-w-full object-contain"
      />

      <button
        className="absolute top-1/2 -translate-y-1/2 left-5 bg-white/30 rounded-full p-2"
        onClick={() =>
          setCurrentIndex((prev) => (prev > 0 ? prev - 1 : stories.length - 1))
        }
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        className="absolute top-1/2 -translate-y-1/2 right-5 bg-white/30 rounded-full p-2"
        onClick={() => setCurrentIndex((prev) => (prev + 1) % stories.length)}
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      <button
        className="absolute top-5 right-5 text-white text-3xl"
        onClick={onClose}
      >
        &times;
      </button>
    </div>
  );
}
