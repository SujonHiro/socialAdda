import { useState } from "react";
import { toast } from "react-toastify";
import useAxios from "../../../hook/useAxios";
import FullScreeenLoading from "../../common/FullScreeenLoading";

function PostSharedAction({ postId }) {
  const [loading, setLoading] = useState(false);

  const handlePostShared = async () => {
    try {
      setLoading(true);
      const response = await useAxios.post(`post/${postId}/share`);

      if (response.status === 201) {
        toast.success("Post Shared Successfully");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to share the post.");
    } finally {
      setLoading(false);
    }
  };
  if (loading) return <FullScreeenLoading />;
  return (
    <>
      <button
        onClick={handlePostShared}
        className="flex items-center cursor-pointer text-white font-semibold text-md hover:text-blue-600 px-4 rounded-md py-1"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 16 16"
          className="scale-x-[-1] inline-block  ps-1"
          height="16"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5.921 11.9 1.353 8.62a.72.72 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z"></path>
        </svg>
        Share
      </button>
    </>
  );
}

export default PostSharedAction;
