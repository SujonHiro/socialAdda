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
      return {
        ...state,
        loading: false,
        comments: action.data,
      };
    }
    case actions.comment.POST_COMMENT_CREATED: {
      const newComment = {
        ...action.data,
        replies: [],
      };

      console.log(newComment);

      if (newComment.parent_comment_id) {
        return {
          ...state,
          loading: false,
          comments: state.comments.map((comment) =>
            comment.id === newComment.parent_comment_id
              ? {
                  ...comment,
                  replies: [newComment, ...(comment.replies || [])],
                }
              : comment
          ),
        };
      }
      return {
        ...state,
        loading: false,
        comments: [newComment, ...state.comments],
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
