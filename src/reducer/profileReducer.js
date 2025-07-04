import { actions } from "../action";

const initialState = {
  user: null,
  posts: [],
  loading: false,
  error: null,
};

const profileReducer = (state, action) => {
  switch (action.type) {
    case actions.profile.USER_PROFILE_FETCHING: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    case actions.profile.USER_PROFILE_FETCHED: {
      return {
        ...state,
        user: action.data.user,
        posts: action.data.posts,
        loading: false,
      };
    }
    case actions.profile.USER_PROFILE_EDITED: {
      return {
        ...state,
        user: { ...state.user, ...action.payload },
        loading: false,
      };
    }
    case actions.profile.USER_POST_DELETED: {
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.data),
      };
    }
    
    case actions.profile.USER_PROFILE_FETCHED_ERROR: {
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

export { initialState, profileReducer };
