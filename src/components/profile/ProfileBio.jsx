import { useState } from "react";
import { toast } from "react-toastify";
import { actions } from "../../action";
import useAxios from "../../hook/useAxios";
import useProfile from "../../hook/useProfile";

function ProfileBio() {
  const { state, dispatch } = useProfile();
  const [bio, setBio] = useState(state?.user?.bio);
  const [isEdited, setIsEdited] = useState(false);

  const handleBioUpdate = async () => {
    if (!bio.trim()) {
      toast.error("Bio is Required");
      return;
    }
    dispatch({ type: actions.profile.USER_PROFILE_FETCHING });

    try {
      const response = await useAxios.post("/profile", { bio });
      console.log(response);

      if (response.status === 200) {
        dispatch({
          type: actions.profile.USER_PROFILE_EDITED,
          payload: response.data.user,
        });
        toast.success("Your Bio is Updated");
      }
      setIsEdited(false);
    } catch (error) {
      dispatch({
        type: actions.profile.USER_PROFILE_FETCHED_ERROR,
        error: error.message,
      });
    }
  };
  return (
    <>
      {!isEdited ? (
        <p className="text-center">{bio}</p>
      ) : (
        <textarea
          required
          className=" form-control leading-[188%] text-gray-400 lg:text-lg rounded-md focus:outline-none "
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
      )}
      {!isEdited ? (
        <button
          className="cursor-pointer shrink-0"
          onClick={() => setIsEdited(true)}
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
            className="lucide lucide-pencil @sm:size-4"
          >
            <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
            <path d="m15 5 4 4" />
          </svg>
        </button>
      ) : (
        <button className="cursor-pointer" onClick={handleBioUpdate}>
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
            className="lucide lucide-check"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </button>
      )}
    </>
  );
}

export default ProfileBio;
