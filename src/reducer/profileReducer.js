import { actions } from "../action";

const initialState = {
  user: null,
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
        user: action.payload,
        loading: false,
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
