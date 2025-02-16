import { useRef } from "react";
import { toast } from "react-toastify";
import { actions } from "../../../action";
import useAxios from "../../../hook/useAxios";
import useStory from "../../../hook/useStory";

function UploadStory() {
  const fileUploadRef = useRef();
  const { dispatch } = useStory();

  function handleStory(e) {
    e.preventDefault();
    fileUploadRef.current.click();
  }
  const MAX_FILE_SIZE = 2 * 1024 * 1024;
  async function handleFileChange(event) {
    const file = event.target.files[0];
    if (!file) return;

    if (file.size > MAX_FILE_SIZE) {
      toast.error("File size must be less than 2MB");
      return;
    }
    // Prepare file for upload
    dispatch({ type: actions.story.STORY_FETCHING });
    try {
      const formData = new FormData();
      formData.append("image", file);
      const response = await useAxios.post("/story/upload", formData);
      console.log("response", response.data.story);

      if (response.status === 201) {
        dispatch({
          type: actions.story.STORY_CREATED,
          payload: response.data.story,
        });
        toast.success("Story Upload Successfully");
      }
    } catch (error) {
      dispatch({
        type: actions.story.STORY_FETCHED_ERROR,
        error: error.message,
      });
      toast.error("Something went wrong");
    }
  }

  return (
    <div>
      <button
        onClick={handleStory}
        className="w-full cursor-pointer text-center flex flex-col justify-center items-center 
                relative min-h-auto  rounded-lg"
      >
        <label
          htmlFor="file-upload"
          className="h-[2.5rem] w-[2.5rem] inline-flex items-center justify-center bg-[#16171b] hover:bg-[#2d2f36]  px-4 py-2  text-white font-medium rounded-full  cursor-pointer  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 448 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
          </svg>
        </label>
        <h6 className="mt-2 mb-0 text-sm">Post a Story</h6>
      </button>
      <input
        ref={fileUploadRef}
        type="file"
        id="fileUpload"
        accept="image/*"
        onChange={handleFileChange}
        hidden
      />
    </div>
  );
}

export default UploadStory;
