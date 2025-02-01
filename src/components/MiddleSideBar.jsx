import { useEffect, useReducer } from "react";
import { actions } from "../action";
import useAxios from "../hook/useAxios";
import { initialState, postReducer } from "../reducer/postReducer";
import ImageStory from "./newsfeed/ImageStory";
import CreatePost from "./newsfeed/post/CreatePost";
import PostList from "./newsfeed/post/PostList";

function MiddleSideBar() {
  const [state, dispatch] = useReducer(postReducer, initialState);

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
      }
    };
    fetchPost();

    //console.log(state);
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
