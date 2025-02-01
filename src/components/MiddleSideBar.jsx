import { useEffect } from "react";
import { actions } from "../action";
import useAxios from "../hook/useAxios";
import usePost from "../hook/usePost";
import ImageStory from "./newsfeed/ImageStory";
import CreatePost from "./newsfeed/post/CreatePost";
import PostList from "./newsfeed/post/PostList";

function MiddleSideBar() {
  const { state, dispatch } = usePost();

  useEffect(() => {
    dispatch({ type: actions.post.DATA_FETCHING });
    const fetchPost = async () => {
      try {
        const response = await useAxios.get(
          `${import.meta.env.VITE_BASE_URL}/posts`
        );

        if (response.status === 200) {
          dispatch({
            type: actions.post.DATA_FETCHED,
            data: response.data,
          });

          //console.log(response.data);
        }
      } catch (error) {
        console.error(error);
        dispatch({ type: actions.post.DATA_FETCH_ERROR });
      }
    };
    fetchPost();

    //console.log(state);
    // eslint-disable-next-line
  }, []);

  //console.log(state?.posts);

  return (
    <div className="flex flex-1 flex-col gap-4 self-stretch">
      {/* <!--daily share story Section--> */}
      <ImageStory />
      {/*  <!--Create post Area--> */}

      <CreatePost />

      {/* <!--Post Card started--> */}
      <PostList posts={state?.posts} />
      {/* <!--Post Card ended--> */}
    </div>
  );
}

export default MiddleSideBar;
