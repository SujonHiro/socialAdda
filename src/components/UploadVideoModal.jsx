import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import ReactPlayer from "react-player";
import { toast } from "react-toastify";
import { actions } from "../action";
import useAuth from "../hook/useAuth";
import useAxios from "../hook/useAxios";
import usePost from "../hook/usePost";
export default function UploadVideoModal({ onClose, post }) {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const { dispatch } = usePost();
  const { register, handleSubmit, reset, setValue } = useForm();
  const { auth } = useAuth();
  const fileUploadRef = useRef();

  useEffect(() => {
    if (post) {
      setSelectedVideo(post.content_url);
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
      setSelectedVideo(URL.createObjectURL(file));
    }
  };

  const handlePost = async (data) => {
    const file = fileUploadRef.current.files[0];
    const formData = new FormData();
    const maxSize = 20 * 1024 * 1024;
    if (file) {
      if (file.size > maxSize) {
        toast.error("File size exceeds the 20MB limit. Your file is 20MB");
        return;
      } else if (file.type !== "video/mp4") {
        toast.error("Please upload a mp4 video Only.");
        return;
      } else if (!file.type.startsWith("video/")) {
        toast.error("Please upload a valid video file.");
        return;
      }
      formData.append("content_file", file);
    }

    formData.append("content", data.content);
    formData.append("content_type", "video");

    dispatch({ type: actions.post.DATA_FETCHING });

    onClose();
    toast.info("Video Processing We will Notify you when Done");
    try {
      if (post) {
        const response = await useAxios.post(`/post/${post.id}`, formData);

        if (response.status === 200) {
          dispatch({
            type: actions.post.DATA_EDITED,
            data: response.data.data,
          });
          toast.success(" Post updated successfully!");
        }
      } else {
        if (!file) {
          toast.error("Please select a video.");
          return;
        }
        const response = await useAxios.post("/post", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        if (response.status === 201) {
          dispatch({
            type: actions.post.DATA_CREATED,
            data: response.data.data,
          });
          toast.success("Video uploaded successfully!");
          setSelectedVideo(null);
          reset();
        } else if (response.status === 422) {
          const errors = response.data.errors.content_file;
          if (errors && errors.length > 0) {
            dispatch({
              type: actions.post.DATA_FETCH_ERROR,
              error: errors.join(" "),
            });
            toast.error("Validation failed: " + errors.join(" "));
            console.log("API Error 422:", errors);
          } else {
            toast.error("Validation failed: Please check the uploaded video.");
            console.log("API Error 422: No content_file errors provided.");
          }
        } else {
          dispatch({ type: actions.post.DATA_FETCH_ERROR });
          toast.error("Upload failed, please try again.");
          console.log("API Error:", response.errors || "Unknown API error");
        }
      }
    } catch (error) {
      console.error("Error caught:", error.response || error.message || error);
      toast.error("An error occurred while uploading.");
    }
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
        <div className="relative bg-[#141519] rounded-lg p-6 w-md">
          {/* Modal Content */}
          <h2 className="text-lg font-semibold mb-4 flex justify-between items-center ">
            Upload Video{" "}
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
                alt={auth.user.name}
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
                ${selectedVideo ? "p-2" : "p-16 mb-4"}`}
            >
              <label htmlFor="file-upload" className="cursor-pointer ">
                {selectedVideo ? (
                  <div className="w-full max-h-64 overflow-hidden rounded-lg">
                    <ReactPlayer
                      url={selectedVideo}
                      controls
                      width="100%"
                      height="auto"
                      className="rounded-lg"
                    />
                  </div>
                ) : (
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    className="display-3"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0M1 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0"></path>
                    <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm6 8.73V7.27l-3.5 1.555v4.35zM1 8v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1"></path>
                    <path d="M9 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6M7 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0"></path>
                  </svg>
                )}
              </label>

              {!selectedVideo && <p>Just click to upload photo.</p>}
            </button>
            <input
              type="file"
              id="fileUpload"
              accept="video/*"
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
                {post ? "Update" : "Post"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
