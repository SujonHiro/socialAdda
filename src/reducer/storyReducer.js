import { actions } from "../action";

const initialState = {
  stories: [],
  loading: false,
  error: null,
};

const storyReducer = (state, action) => {
  switch (action.type) {
    case actions.story.STORY_FETCHING: {
      return {
        ...state,
        loading: true,
      };
    }
    case actions.story.STORY_FETCHED: {
      return {
        ...state,
        stories: action.data?.stories
          ? Object.values(action.data.stories).flat()
          : [],
        loading: false,
      };
    }
    case actions.story.STORY_FETCHED_ERROR: {
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
};

export { initialState, storyReducer };
