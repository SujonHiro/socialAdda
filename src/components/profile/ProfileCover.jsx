import { useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { actions } from "../../action";
import useAxios from "../../hook/useAxios";
import useProfile from "../../hook/useProfile";

function ProfileCover({ profileCover }) {
  const { state, dispatch } = useProfile();
  const fileUploaderRef = useRef();

  function handleImage(e) {
    e.preventDefault();
    fileUploaderRef.current.addEventListener("change", updateImageDisplay);
    fileUploaderRef.current.click();
  }
  async function updateImageDisplay() {
    try {
      const formData = new FormData();
      for (const file of fileUploaderRef.current.files) {
        formData.append("cover_picture", file);
      }
      const response = await useAxios.post("/profile", formData);
      if (response.status === 200) {
        dispatch({
          type: actions.profile.USER_PROFILE_EDITED,
          payload: response.data.user,
        });
        toast.success(response.data.message);
      }
    } catch (error) {
      dispatch({
        type: actions.profile.USER_PROFILE_FETCHED_ERROR,
        payload: error.response.data.message,
      });
    }
  }
  useEffect(() => {
    if (state.error) {
      toast.error(state.error);
    }
  }, [state.error]);
  return (
    <div className="relative">
      <div
        style={{ backgroundImage: `url(${profileCover})` }}
        className="bg-cover bg-center bg-no-repeat md:h-[180px] h-[100px] rounded-md"
      ></div>

      <form>
        <button
          onClick={handleImage}
          className="absolute bottom-2 right-2 cursor-pointer p-2 bg-gray-900 rounded-md text-white hover:text-blue-600 z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path d="M12 9a3.75 3.75 0 1 0 0 7.5A3.75 3.75 0 0 0 12 9Z" />
            <path
              fillRule="evenodd"
              d="M9.344 3.071a49.52 49.52 0 0 1 5.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 0 0 1.11-.71l.822-1.315a2.942 2.942 0 0 1 2.332-1.39ZM6.75 12.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Zm12-1.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <input id="file" type="file" ref={fileUploaderRef} hidden />
      </form>
    </div>
  );
}

export default ProfileCover;
