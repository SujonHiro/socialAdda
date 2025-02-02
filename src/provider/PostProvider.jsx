import { useReducer } from "react";
import { PostContext } from "../context";
import { initialState, postReducer } from "../reducer/postReducer";

function PostProvider({ children }) {
  const [state, dispatch] = useReducer(postReducer, initialState);

  //console.log("PostProvider", state.posts[0].id);

  return (
    <PostContext.Provider value={{ state, dispatch }}>
      {children}
    </PostContext.Provider>
  );
}

export default PostProvider;
