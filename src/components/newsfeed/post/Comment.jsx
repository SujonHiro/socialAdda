import { useEffect, useState } from "react";
import { Link } from "react-router";
import { actions } from "../../../action";
import useAuth from "../../../hook/useAuth";
import useAxios from "../../../hook/useAxios";
import useComment from "../../../hook/useComment";
import { formatDate } from "../../../utils/formatime";
import CreateComment from "./CreateComment";
function Comment({ postId, setShowCommentModal }) {
  const { state, dispatch } = useComment();
  const [replyingTo, setReplyingTo] = useState(null);
  const { auth } = useAuth();

  useEffect(() => {
    const fetchCommnets = async () => {
      dispatch({ type: actions.comment.COMMENT_FETCHING });
      try {
        const response = await useAxios.get(`/post/${postId}/comments`);

        if (response.status === 200) {
          dispatch({
            type: actions.comment.POST_COMMENTED,
            data: response.data.data,
          });
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchCommnets();
  }, [dispatch, postId]);

  return (
    <>
      {state.comments.length > 0 &&
        state.comments.map((comment) => (
          <div key={comment.id} className="flex items-start justify-start">
            <div className="shrink-0 self-start">
              <a href="#">
                <img
                  src={comment.user.profile_picture_url}
                  className="size-8 rounded-full"
                  alt="profile"
                />
              </a>
            </div>

            <div className="w-full px-2">
              <div>
                <div className="bg-[#202227] p-2 w-full">
                  <div className=" flex justify-between items-center">
                    <Link
                      to="#"
                      className="font-semibold text-white text-sm hover:text-blue-600"
                    >
                      {comment.user.name}
                    </Link>
                    <span className="text-normal text-sm">
                      {" "}
                      {formatDate(comment.created_at)}{" "}
                    </span>
                  </div>
                  <p>{comment.content}</p>
                </div>
                <ul className="p-2 flex justify-start gap-4">
                  <li>
                    <button
                      onClick={() =>
                        setReplyingTo(
                          replyingTo === comment.id ? null : comment.id
                        )
                      }
                      className="text-sm font-normal hover:text-blue-600"
                    >
                      {replyingTo === comment.id ? "Cancel" : "Reply"}
                    </button>
                  </li>
                </ul>
                {replyingTo === comment.id && comment.id && (
                  <CreateComment
                    postId={postId}
                    userId={auth.user.id}
                    parentCommentId={comment.id}
                    onCommentAdded={() => setReplyingTo(null)}
                    setShowCommentModal={setShowCommentModal}
                  />
                )}
                {comment.replies && comment.replies.length > 0 && (
                  <div className="my-2">
                    {comment.replies.map((reply) => (
                      <div
                        key={reply.id}
                        className=" ml-[20px] my-[10px] flex items-start justify-start"
                      >
                        <div className="shrink-0 self-start">
                          <img
                            src={reply.user.profile_picture_url}
                            className="size-6 rounded-full"
                            alt="profile"
                          />
                        </div>
                        <div className="w-full px-2">
                          <div className="bg-[#282a2e] p-2 rounded-md w-full">
                            <div className="flex justify-between items-center">
                              <Link
                                to="#"
                                className="font-semibold text-white text-sm hover:text-blue-600"
                              >
                                {reply.user.name}
                              </Link>
                              <span className="text-normal text-sm">
                                {formatDate(reply.created_at)}
                              </span>
                            </div>
                            <p>{reply.content}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
    </>
  );
}

export default Comment;
