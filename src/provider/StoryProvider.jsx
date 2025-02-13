import { useReducer } from "react";
import { StoryContext } from "../context";
import { initialState, storyReducer } from "../reducer/storyReducer";

function StoryProvider({ children }) {
  const [state, dispatch] = useReducer(storyReducer, initialState);

  return (
    <StoryContext.Provider value={{ state, dispatch }}>
      {children}
    </StoryContext.Provider>
  );
}

export default StoryProvider;
