import { actions } from "../action";

const initialState = {
  comments: [],
  loading: false,
  error: null,
};

const commentReducer = (state, action) => {
  switch (action.type) {
    case actions.comment.COMMENT_FETCHING: {
      return {
        ...state,
        loading: true,
      };
    }
    case actions.comment.POST_COMMENTED: {
      console.log(action.data);

      return {
        ...state,
        loading: false,
        comments: action.data,
      };
    }
    case actions.comment.POST_COMMENT_CREATED: {
      return {
        ...state,
        comments: state.comments.map((comment) =>
          comment.id === action.data.parent_comment_id
            ? { ...comment, replies: [...(comment.replies || []), action.data] }
            : comment
        ),
      };
    }

    case actions.comment.COMMENT_FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }

    default: {
      return state;
    }
  }
};

export { commentReducer, initialState };
