import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { actions } from "../../../action";
import User from "../../../assets/images/avatars/user.jpg";
import useAxios from "../../../hook/useAxios";
import usePost from "../../../hook/usePost";
import LoadingBar from "../../common/LoadingBar";

function ContentPost({ onCreate }) {
  const { state, dispatch } = usePost();
  //const axiosInstance = useAxios();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  async function onSubmitPost(formData) {
    dispatch({ type: actions.post.DATA_FETCHING });
    try {
      const response = await useAxios.post(`/post`, formData);
      console.log("response api", response.data.data);
      if (response.status === 201) {
        dispatch({ type: actions.post.DATA_CREATED, data: response.data.data });
        reset();
        toast.success("Post Created Successfully");
      }
      onCreate();
    } catch (error) {
      console.log(error);
      dispatch({ type: actions.post.DATA_FETCH_ERROR });
    }
  }
  state.loading && <LoadingBar />;
  state.error && <p>error occured</p>;
  return (
    <>
      <div className="bg-[#141519] p-4 rounded-md my-3">
        <div className="flex gap-4">
          <div className="relative inline-block shrink-0">
            <img src={User} alt="" className="size-8 rounded-full" />
          </div>
          <form className="w-full" onSubmit={handleSubmit(onSubmitPost)}>
            <textarea
              className="form-control focus:outline-none border-0"
              {...register("content", { required: "content is Required" })}
              placeholder="Share your thoughts..."
              id="content"
              name="content"
            ></textarea>
            {errors.content && (
              <span className="text-red-500">{errors.content.message}</span>
            )}
            <button
              type="submit"
              className="  my-2 mx-auto px-5 rounded-sm py-2 bg-[#0f6fec1a] text-blue-600 text-sm hover:bg-blue-600 hover:text-white"
            >
              Post
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContentPost;
