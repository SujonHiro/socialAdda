import { actions } from "../action";

const initialState = {
  stories: {},
  isLoading: false,
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
        stories: action.payload,
        loading: false,
      };
    }
    case actions.story.STORY_CREATED: {
      return {
        ...state,
        stories: {
          ...state.stories,
          ...action.payload,
        },
        isLoading: false,
      };
    }
    case actions.story.STORY_FETCHED_ERROR: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
};

export { initialState, storyReducer };
