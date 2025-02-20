import { useEffect, useRef } from "react";

const useOutsideClick = (ref, callback) => {
  const callbackRef = useRef(callback);

  // Update the callback ref if the callback changes
  callbackRef.current = callback;

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the referenced element
      if (
        ref.current &&
        event.target instanceof Node &&
        !ref.current.contains(event.target)
      ) {
        callbackRef.current(event); // Trigger the callback
      }
    };

    // Add event listener on mount
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup: Remove event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]); // Re-run effect if the ref changes
};

export default useOutsideClick;
