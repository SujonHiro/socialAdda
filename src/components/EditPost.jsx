import { useEffect } from "react";
import { useForm } from "react-hook-form";
import User from "../assets/images/avatars/user.jpg";
import useAxios from "../hook/useAxios";
import usePost from "../hook/usePost";
import { actions } from "../action";

function EditPost({ onClose, post }) {
  const { register, handleSubmit, reset, setValue } = useForm();
  const { dispatch } = usePost();

  useEffect(() => {
    if (post) {
      setValue("content", post.content || "");
    }
  }, [post, setValue]);

  const onSubmit = async (formData) => {
    try {
      const response = await useAxios.post(`/post/${post.id}`, formData);
      console.log(response);
      if (response.status === 200) {
        dispatch({type:actions.post.DATA_EDITED})
      }
      reset;
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      <div className="relative bg-[#141519] rounded-lg p-6 w-md">
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
          <div className="flex items-start gap-2">
            <img
              src={User}
              className="size-10 rounded-full shrink-0"
              alt="User Icon"
            />
            <textarea
              {...register("content", { required: true })}
              placeholder="Enter caption..."
              className="w-full form-control p-2 mb-4 border-none rounded-lg focus:outline-none"
              id="content"
            />
          </div>

          <div className="flex gap-4 justify-end">
            <button
              type="button"
              onClick={onClose}
              className="cursor-pointer flex justify-center my-2 px-5 rounded-sm py-2 bg-[#ec0f551a] text-rose-600 text-sm hover:bg-rose-600 hover:text-white transition-all duration-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="cursor-pointer flex justify-center my-2 px-5 rounded-sm py-2 bg-blue-600 text-white text-sm hover:bg-[#0f6fec1a] hover:text-white transition-all duration-300"
            >
              Update Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditPost;
