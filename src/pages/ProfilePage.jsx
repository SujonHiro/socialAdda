import { useEffect } from "react";
import { actions } from "../action";
import FullScreeenLoading from "../components/common/FullScreeenLoading";
import PostList from "../components/newsfeed/post/PostList";
import ProfileBio from "../components/profile/ProfileBio";
import ProfileCover from "../components/profile/ProfileCover";
import ProfilePicture from "../components/profile/ProfilePicture";
import useAxios from "../hook/useAxios";
import useProfile from "../hook/useProfile";
function ProfilePage() {
  const { state, dispatch } = useProfile();

  const posts = state?.posts;

  useEffect(() => {
    const fetchProfile = async () => {
      dispatch({ type: actions.profile.USER_PROFILE_FETCHING });
      try {
        const response = await useAxios.get("/profile");

        if (response.status === 200) {
          dispatch({
            type: actions.profile.USER_PROFILE_FETCHED,
            data: response.data,
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
        <div className="bg-[#141519] my-4">
          <ProfileCover profileCover={state.user?.cover_picture_url} />
          <div className="p-4 md:mt-[-5rem] mt-[-3rem]">
            <ProfilePicture profilePicture={state.user?.profile_picture_url} />
          </div>
          <div className="mt-3 text-center">
            <h2>{state.user?.name}</h2>
            <p>{state.user?.email}</p>
          </div>

          <div className="flex gap-2  justify-center md:items-center py-4 px-4">
            <ProfileBio />
          </div>
        </div>

        {/* <CreatePost /> */}

        <PostList posts={posts} />
      </div>
    </>
  );
}

export default ProfilePage;
