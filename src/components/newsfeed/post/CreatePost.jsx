import { useForm } from "react-hook-form";
import { actions } from "../../../action";
import User from "../../../assets/images/avatars/user.jpg";
import useAuth from "../../../hook/useAuth";
import useAxios from "../../../hook/useAxios";
import usePost from "../../../hook/usePost";
import PostWithFile from "../PostWithFile";
import PostWithVideo from "./PostWithVideo";

function CreatePost() {
  const { auth } = useAuth();
  const { state, dispatch } = usePost();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  async function onSubmitPost(formData) {
    dispatch({ type: actions.post.DATA_FETCHING });
    console.log(formData);
    try {
      const response = await useAxios.post(
        `${import.meta.env.VITE_BASE_URL}/post`,
        formData
      );
      console.log("response api", response.data);

      if (response.status === 201) {
        dispatch({ type: actions.post.DATA_CREATED, data: response.data });
      }
    } catch (error) {
      console.log(error);
    }
  }
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
            ></textarea>

            <ul className="flex justify-between items-center mt-2 p-0">
              <div className="flex items-center gap-2">
                <li>
                  <PostWithFile />
                </li>
                <li>
                  <PostWithVideo />
                </li>
              </div>

              <li>
                <button
                  type="submit"
                  className="flex justify-center my-2 mx-auto px-5 rounded-sm py-2 bg-[#0f6fec1a] text-blue-600 text-sm hover:bg-blue-600 hover:text-white"
                >
                  Post
                </button>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreatePost;
