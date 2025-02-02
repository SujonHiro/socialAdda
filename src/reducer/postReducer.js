import { actions } from "../action";
const initialState = {
  posts: [],
  loading: false,
  error: null,
};

//console.log("posts", initialState.posts);

const postReducer = (state, action) => {
  switch (action.type) {
    case actions.post.DATA_FETCHING: {
      return {
        ...state,
        loading: true,
      };
    }
    case actions.post.DATA_FETCHED: {
      //console.log("DATA_FETCHED", action.data);
      return {
        ...state,
        posts: action.data,
        loading: false,
      };
    }
    case actions.post.DATA_CREATED: {
      //console.log("DATA_CREATED", state.posts);

      return {
        ...state,
        loading: false,
        posts: [action.data, ...state.posts],
      };
    }

    case actions.post.DATA_FETCH_ERROR: {
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

export { initialState, postReducer };
