import { actions } from "../action";
const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const postReducer = (state, action) => {
  switch (action.type) {
    case actions.post.DATA_FETCHING: {
      return {
        ...state,
        loading: true,
      };
    }
    case actions.post.DATA_FETCHED: {
      return {
        ...state,
        posts: action.data,
        loading: false,
      };
    }
    case actions.post.DATA_CREATED: {
      return {
        ...state,
        loading: false,
        posts: [action.data, ...state.posts],
      };
    }
    case actions.post.DATA_EDITED: {
      return {
        ...state,
        loading: false,
        posts: state.posts.map((post) =>
          post.id === action.data.id ? action.data : post
        ),
      };
    }
    case actions.post.POST_DELETED: {
      return {
        ...state,
        loading: false,
        posts: state.posts.filter((post) => post.id !== action.data),
      };
    }
    case actions.post.POST_COMMENTED: {
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.data.postId
            ? {
                ...post,
                comments: [...(post.comments || []), action.data.comment],
              }
            : post
        ),
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
