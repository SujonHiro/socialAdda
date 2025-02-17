import { useRef } from "react";
import { toast } from "react-toastify";
import { actions } from "../../action";
import useAxios from "../../hook/useAxios";
import useProfile from "../../hook/useProfile";

function ProfilePicture({ profilePicture }) {
  const { dispatch } = useProfile();
  const fileUploaderRef = useRef();

  function handleImage(e) {
    e.preventDefault();
    fileUploaderRef.current.addEventListener("change", updateImageDisplay);
    fileUploaderRef.current.click();
  }
  async function updateImageDisplay() {
    console.log("clickFile");
    try {
      const formData = new FormData();
      for (const file of fileUploaderRef.current.files) {
        formData.append("profile_picture", file);
      }
      const response = await useAxios.post("/profile", formData);
      if (response.status === 200) {
        dispatch({
          type: actions.profile.USER_PROFILE_EDITED,
          payload: response.data.user,
        });
        toast.success("Profile Picture updated successfully");
      }
    } catch (error) {
      dispatch({
        type: actions.profile.USER_PROFILE_FETCHED_ERROR,
        error: error.message,
      });
    }
  }
  return (
    <div className="relative flex justify-center items-center">
      <img
        src={profilePicture}
        className="bg-cover mx-auto border-4 rounded-md border-white size-20 md:size-32"
        alt=""
      />

      <form encType="multipart/form-data">
        <button
          onClick={handleImage}
          className="absolute bottom-1 cursor-pointer right-34 md:bottom-2 md:right-84 lg:right-84 2xl:right-[45.5%] bg-gray-800 p-1 rounded-md text-white hover:text-blue-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-camera "
          >
            <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
            <circle cx="12" cy="13" r="3" />
          </svg>
        </button>
        <input id="file" type="file" ref={fileUploaderRef} hidden />
      </form>
    </div>
  );
}

export default ProfilePicture;
