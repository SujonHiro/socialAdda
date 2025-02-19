import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { actions } from "../action";
import useAxios from "../hook/useAxios";
import usePost from "../hook/usePost";
import ProfileImage from "./common/ProfileImage";

function EditPost({ onClose, post }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm();
  const { dispatch } = usePost();
  console.log(post);

  useEffect(() => {
    if (post) {
      setValue("content", post.content);
    }
  }, [post, setValue]);

  const onSubmit = async (formData) => {
    dispatch({ type: actions.post.DATA_FETCHING });
    if (formData === "") {
      toast.error("please input first");
    }
    try {
      const response = await useAxios.post(`/post/${post.id}`, formData);
      console.log(response);
      if (response.status === 200) {
        dispatch({
          type: actions.post.DATA_EDITED,
          data: response.data.data,
        });
        toast.success("your Post updated successfully");
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="flex items-start gap-2">
              <ProfileImage />
              <textarea
                {...register("content", { required: "Content is required" })}
                placeholder="Enter caption..."
                className="w-full form-control p-2 mb-4 border-none rounded-lg focus:outline-none"
                id="content"
              />
            </div>
            {errors.content && (
              <p className="ml-[50px] text-red-600 text-sm">
                {errors.content.message}
              </p>
            )}
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
