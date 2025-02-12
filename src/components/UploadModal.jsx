import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { actions } from "../action";
import useAuth from "../hook/useAuth";
import useAxios from "../hook/useAxios";
import usePost from "../hook/usePost";
import FullScreeenLoading from "./common/FullScreeenLoading";
export default function UploadModal({ onClose, post }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const { state, dispatch } = usePost();
  const { auth } = useAuth();
  const { register, handleSubmit, reset, setValue } = useForm();
  const fileUploadRef = useRef();

  useEffect(() => {
    if (post) {
      setSelectedImage(post.content_url);
      setValue("content", post.content || "");
    }
  }, [setValue, post]);

  const handleImageUpload = (event) => {
    event.preventDefault();
    fileUploadRef.current.click();
  };
  const updatePost = () => {
    const file = fileUploadRef.current.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };
  const handlePost = async (data) => {
    const file = fileUploadRef.current.files[0];
    const formData = new FormData();
    if (file) {
      if (!file.type.startsWith("image/")) {
        toast.error("Please upload a valid image file.");
        return;
      }
      formData.append("content_file", file);
    }
    formData.append("content", data.content);
    formData.append("content_type", "image");
    dispatch({ type: actions.post.DATA_FETCHING });
    onClose();
    try {
      if (post) {
        const response = await useAxios.post(`/post/${post.id}`, formData);

        if (response.status === 200) {
          dispatch({
            type: actions.post.DATA_EDITED,
            data: response.data.data,
          });
          toast.success("Image updated successfully!");
        }
      } else {
        if (!file) {
          toast.error("Please select an image.");
          return;
        }
        const response = await useAxios.post("/post", formData);
        if (response.status === 201) {
          dispatch({
            type: actions.post.DATA_CREATED,
            data: response.data.data,
          });
          toast.success("Image uploaded successfully!");
        } else {
          dispatch({ type: actions.post.DATA_FETCH_ERROR });
          toast.error("Upload failed, please try again.");
        }
      }
      setSelectedImage(null);
      reset();
    } catch (error) {
      console.error(error);
      dispatch({ type: actions.post.DATA_FETCH_ERROR });
      toast.error("An error occurred while uploading.");
    }
  };

  return (
    <>
      {state.loading && <FullScreeenLoading />}
      <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
        <div className="relative bg-[#141519] rounded-lg p-6 w-md">
          <h2 className="text-lg font-semibold mb-4 flex justify-between items-center ">
            Upload Photo{" "}
            <button
              onClick={onClose}
              className="cursor-pointer text-white text-xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  fillRule="evenodd"
                  d="M6.225 4.811a1 1 0 011.414 0L12 9.172l4.361-4.361a1 1 0 011.414 1.414L13.414 10.5l4.361 4.361a1 1 0 01-1.414 1.414L12 11.828l-4.361 4.361a1 1 0 01-1.414-1.414l4.361-4.361L6.225 6.225a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </h2>

          <div encType="multipart/form-data">
            <div className="flex items-start gap-2">
              <img
                src={auth.user.profile_picture_url}
                className="size-10 rounded-full shrink-0"
                alt="User ICon"
              />
              <textarea
                {...register("content")}
                placeholder="Enter caption..."
                className="w-full form-control  p-2 mb-4 border-none rounded-lg focus:outline-none "
                name="content"
                id="content"
              />
            </div>
            <button
              onClick={handleImageUpload}
              className={`w-full cursor-pointer text-center flex flex-col justify-center items-center 
                relative min-h-auto border-2 border-dashed rounded-lg 
                ${selectedImage ? "p-2" : "p-16 mb-4"}`}
            >
              <label htmlFor="file-upload" className="cursor-pointer ">
                {selectedImage ? (
                  <img
                    src={selectedImage}
                    alt="Selected"
                    className="w-full max-h-64 object-cover rounded-lg"
                  />
                ) : (
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    height="1em"
                    className="md:text-7xl self-center "
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"></path>
                    <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2M14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1M2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1z"></path>
                  </svg>
                )}
              </label>
              {!selectedImage && <p>Just click to upload photo.</p>}
            </button>
            <input
              type="file"
              id="fileUpload"
              accept="image/*"
              onChange={updatePost}
              ref={fileUploadRef}
              hidden
            />
            <div className="flex gap-4 justify-end">
              <button
                onClick={onClose}
                className=" cursor-pointer flex justify-center my-2  px-5 rounded-sm py-2 bg-[#ec0f551a] text-rose-600 text-sm hover:bg-rose-600 hover:text-white transition-all duration-300"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit(handlePost)}
                className="cursor-pointer flex justify-center my-2  px-5 rounded-sm py-2  bg-blue-600 text-white text-sm hover:bg-[#0f6fec1a] hover:text-white transition-all duration-300"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
