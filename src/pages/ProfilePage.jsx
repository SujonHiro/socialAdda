import { useEffect } from "react";
import { actions } from "../action";
import FullScreeenLoading from "../components/common/FullScreeenLoading";
import CreatePost from "../components/newsfeed/post/CreatePost";
import ProfileBio from "../components/profile/ProfileBio";
import ProfileCover from "../components/profile/ProfileCover";
import ProfilePicture from "../components/profile/ProfilePicture";
import useAxios from "../hook/useAxios";
import useProfile from "../hook/useProfile";
function ProfilePage() {
  const { state, dispatch } = useProfile();

  useEffect(() => {
    const fetchProfile = async () => {
      dispatch({ type: actions.profile.USER_PROFILE_FETCHING });
      try {
        const response = await useAxios.get("/profile");

        if (response.status === 200) {
          dispatch({
            type: actions.profile.USER_PROFILE_FETCHED,
            payload: response.data.user,
          });
        }
      } catch (error) {
        dispatch({
          type: actions.profile.USER_PROFILE_FETCHED_ERROR,
          error: error.message,
        });
      }
    };
    fetchProfile();
  }, [dispatch]);

  if (state?.loading) return <FullScreeenLoading />;
  return (
    <>
      <div className="md:w-2/3 mx-auto mb-3">
        {/*  Profile */}
        <div className="bg-[#141519]">
          <ProfileCover profileCover={state.user?.cover_picture_url} />
          <div className="p-4 md:mt-[-5rem] mt-[-3rem]">
            <ProfilePicture profilePicture={state.user?.profile_picture_url} />
          </div>
          <div className="mt-3 text-center">
            <h2>{state.user?.name}</h2>
            <p>{state.user?.email}</p>
          </div>
          {/*<div className="">
              <div className="md:ml-auto md:self-center justify-center flex">
              <button className="mt-3 mr-3 bg-[#2525cb21] text-blue-700 font-semibold hover:bg-blue-700 hover:text-white px-4 py-2 rounded-md">
                Edit Profile
              </button>
            </div> 
          </div>*/}
          <div className="md:flex md:gap-2 justify-between md:items-center  py-4 px-4">
            <ProfileBio />
          </div>
        </div>
        {/* Create Post Section */}
        <CreatePost />
      </div>
    </>
  );
}

export default ProfilePage;
