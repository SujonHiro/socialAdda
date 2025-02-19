import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { actions } from "../../../action";
import useAxios from "../../../hook/useAxios";
import usePost from "../../../hook/usePost";
import FullScreeenLoading from "../../common/FullScreeenLoading";
import ProfileImage from "../../common/ProfileImage";
import PostWithFile from "../PostWithFile";
import PostWithVideo from "./PostWithVideo";
function CreatePost() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFileOpenModal, setIsFileOpenModal] = useState(false);
  const { state, dispatch } = usePost();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  async function onSubmitPost(formData) {
    dispatch({ type: actions.post.DATA_FETCHING });
    try {
      const response = await useAxios.post(`/post`, formData);

      if (response.status === 201) {
        dispatch({ type: actions.post.DATA_CREATED, data: response.data.data });
        reset();
        toast.success(response.data.message);
      }
    } catch (error) {
      console.log("error", error);
      dispatch({ type: actions.post.DATA_FETCH_ERROR });
    }
  }
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const togglePhotoModal = () => {
    setIsFileOpenModal(!isFileOpenModal);
  };

  state.loading && <FullScreeenLoading />;

  return (
    <>
      <div className="bg-[#141519] my-4">
        <div className="p-4 rounded-md my-3">
          <div className="flex gap-4">
            <div className="relative inline-block shrink-0">
              <ProfileImage />
            </div>
            <form className="w-full" onSubmit={handleSubmit(onSubmitPost)}>
              <textarea
                className="form-control focus:outline-none border-0"
                {...register("content", { required: "content is Required" })}
                placeholder="Share your thoughts..."
                id="content"
                name="content"
              />
              {errors.content && (
                <span className="text-red-500 text-sm">
                  {errors.content.message}
                </span>
              )}
              <ul className="flex justify-between items-center mt-2">
                <div className="flex gap-4">
                  <li>
                    <PostWithFile
                      onToggle={togglePhotoModal}
                      isModalOpen={isFileOpenModal}
                    />
                  </li>
                  <li>
                    <PostWithVideo
                      onToggle={toggleModal}
                      isModalOpen={isModalOpen}
                    />
                  </li>
                </div>

                <li>
                  <button
                    type="submit"
                    className="cursor-pointer me-3 my-2 mx-auto px-5 rounded-sm py-2 bg-[#0f6fec1a] text-blue-600 text-sm hover:bg-blue-600 hover:text-white transition-all duration-200"
                  >
                    Post
                  </button>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreatePost;
