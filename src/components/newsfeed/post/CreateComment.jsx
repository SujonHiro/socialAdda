import { useState } from "react";
import { useForm } from "react-hook-form";

import { actions } from "../../../action/index";
import usePost from "../../../hook/usePost";
import useAxios from "../../../hook/useAxios";

function CreateComment({ postId, userId }) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
const{dispatch}=usePost()
  const onSubmit = async (data) => {
    if (!data.comment.trim()) return; // Prevent empty comments

    setLoading(true);

    try {
      const response = await useAxios.post(
        "/comment",
        {
          user_id: userId,
          post_id: postId,
          content: data.comment,
          parent_comment_id: null, // Modify if it's a reply
        }
      );
      console.log(response);
      

      if (response.data.success) {
        reset(); // Reset form input after success
        dispatch({
          type: actions.post.POST_COMMENTED,
          data: {
            postId: postId,
            comment: response.data.data, // New comment data from API
          },
        });
      } else {
        console.error("Failed to post comment", response.data);
      }
    } catch (error) {
      console.error("Error posting comment:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="w-full relative" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Add a comment..."
        className="border border-[#202227] form-control focus:outline-none focus:border-blue-600 w-full px-3 py-2 rounded-md"
        {...register("comment", { required: "Comment cannot be empty" })}
        disabled={loading}
      />
      {errors.comment && <p className="text-red-500">{errors.comment.message}</p>}
      <button
        type="submit"
        className="absolute right-2 top-[50%] hover:text-blue-600 transform translate-y-[-50%] disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "..." : (
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            height="1.2em"
            width="1.2em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"></path>
          </svg>
        )}
      </button>
    </form>
  );
}

export default CreateComment;
