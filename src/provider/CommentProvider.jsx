import { useReducer } from "react";
import { CommentContext } from "../context";
import { commentReducer, initialState } from "../reducer/commentReducer";

function CommentProvider({ children }) {
  const [state, dispatch] = useReducer(commentReducer, initialState);

  return (
    <CommentContext.Provider value={{ state, dispatch }}>
      {children}
    </CommentContext.Provider>
  );
}

export default CommentProvider;
