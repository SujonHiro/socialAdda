import { useForm } from "react-hook-form";
import { actions } from "../../../action/index";
import useAxios from "../../../hook/useAxios";
import useComment from "../../../hook/useComment";

function CreateComment({
  postId,
  parentCommentId,
  onCommentAdded,
  setShowCommentModal,
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { state, dispatch } = useComment();
  const onSubmit = async (data) => {
    if (!data.comment.trim()) return;

    dispatch({ type: actions.comment.COMMENT_FETCHING });

    try {
      const response = await useAxios.post("/comment", {
        post_id: postId,
        content: data.comment,
        parent_comment_id: parentCommentId || null,
      });
      console.log(response);

      if (response.data.success) {
        dispatch({
          type: actions.comment.POST_COMMENT_CREATED,
          data: response.data.data,
        });
        onCommentAdded();
        setShowCommentModal(true);
        reset();
      } else {
        console.error("Failed to post comment", response.data);
      }
    } catch (error) {
      console.error("Error posting comment:", error);
      dispatch({ type: actions.comment.COMMENT_FETCH_ERROR });
    }
  };

  return (
    <form className="w-full relative" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Add a comment..."
        className="border border-[#202227] form-control focus:outline-none focus:border-blue-600 w-full px-3 py-2 rounded-md"
        {...register("comment", { required: "Comment cannot be empty" })}
        disabled={state?.loading}
      />
      {errors.comment && (
        <p className="text-red-500">{errors.comment.message}</p>
      )}
      <button
        type="submit"
        className="absolute right-2 top-[50%] hover:text-blue-600 transform translate-y-[-50%] disabled:opacity-50"
        disabled={state?.loading}
      >
        {state?.loading ? (
          "..."
        ) : (
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
