import { useState } from "react";
import { Link } from "react-router";
import { toast } from "react-toastify";
import { actions } from "../../../action/index";
import useAuth from "../../../hook/useAuth";
import useAxios from "../../../hook/useAxios";
import usePost from "../../../hook/usePost";
import useProfile from "../../../hook/useProfile";
import { formatDate } from "../../../utils/formatime";
import EditPost from "../../EditPost";
import UploadModal from "../../UploadModal";
import UploadVideoModal from "../../UploadVideoModal";
import ActionDataCount from "./ActionDataCount";
import CommentSection from "./CommentSection";
import PostAction from "./PostAction";
import PostBody from "./PostBody";
import PostSharedAction from "./PostSharedAction";

export default function PostCard({ post }) {
  const { auth } = useAuth();
  const isMe = auth.user.id == post.user.id;
  const { dispatch } = usePost();
  const { dispatch: profileDispatch } = useProfile();
  const [editingPost, setEditingPost] = useState(null);
  const [showTextArea, setShowTextArea] = useState(false);
  const [showImagePostModal, setShowImagePostModal] = useState(false);
  const [showVideoPostModal, setShowVideoPostModal] = useState(false);
  const [showCommentModal, setShowCommentModal] = useState(false);
  const [isLiked, setIsLiked] = useState(
    post.likes?.some((like) => like.user_id === auth.user.id)
  );
  const [likesCount, setLikesCount] = useState(
    post.is_shared !== true ? post.likes_count || 0 : post.likes_count
  );
  const [countComments, setCountCommnets] = useState(post.comments_count || 0);

  const handleDeletePost = async () => {
    if (!window.confirm("Are you sure you want to delete this post?")) {
      return;
    }
    dispatch({ type: actions.post.DATA_FETCHING });
    profileDispatch({ type: actions.post.DATA_FETCHING });

    try {
      const response = await useAxios.delete(`/post/${post.id}`);
      if (response.status === 200) {
        dispatch({ type: actions.post.POST_DELETED, data: post.id });
        profileDispatch({
          type: actions.profile.USER_POST_DELETED,
          data: post.id,
        });
        toast.success(response.data.message);
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: actions.post.DATA_FETCH_ERROR });
    }
  };
  const handleEditPost = (post) => {
    setEditingPost(post);
    if (post.content_type === null) {
      setShowTextArea(true);
    } else if (post.content_type === "image") {
      setShowImagePostModal(true);
    } else if (post.content_type === "video") {
      setShowVideoPostModal(true);
    }
  };

  const handleLikePost = async () => {
    const newLikedState = !isLiked;
    const updatedLikesCount = newLikedState ? likesCount + 1 : likesCount - 1;

    setIsLiked(newLikedState);
    setLikesCount(updatedLikesCount);

    try {
      const response = await useAxios.post(`/post/${post.id}/like`);

      if (response.status === 201) {
        setLikesCount(response.data.total_likes);
      } else {
        throw new Error("Failed to like the post");
      }
    } catch (error) {
      console.error("Error liking the post:", error);

      setIsLiked(!newLikedState);
      setLikesCount(likesCount);
    }
  };

  const handleCommentAdded = () => {
    setCountCommnets((prev) => prev + 1);
  };

  return (
    <>
      <div className={`bg-[#141519] ${post.is_shared ? "p-4" : ""} mb-4`}>
        {post.is_shared && (
          <div className=" mb-2 text-sm text-gray-400">
            <div className="flex items-center">
              <img
                src={post.user.profile_picture_url}
                alt={post.user.name}
                className="w-8 h-8 rounded-full mr-2"
              />
              <p>
                <span className="font-semibold">{post.user.name}</span> shared{" "}
                <span className="font-semibold">{post.post_user.name}</span>
                &apos;s post {formatDate(post.created_at)}
              </p>
            </div>
          </div>
        )}
        <div className="mb-3 bg-[#141519] rounded-md">
          <div
            className={`${
              post.is_shared
                ? "border border-gray-800 rounded-md py-4 px-2 shadow-md"
                : ""
            } `}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 mb-3 p-4">
                <Link
                  to="/me"
                  className="text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <img
                    src={
                      post.is_shared
                        ? post.post_user.profile_picture_url
                        : post.user.profile_picture_url
                    }
                    className="rounded-full size-10"
                    alt={post.is_shared ? post.post_user.name : post.user.name}
                  />
                </Link>
                <div>
                  <span className="text-sm">
                    {post.is_shared ? post.post_user.name : post.user.name}
                  </span>
                  <p className="text-xs">
                    {!post.is_shared && formatDate(post.created_at)}
                  </p>
                </div>
              </div>
              {!post.is_shared && isMe && (
                <PostAction
                  onEdit={() => handleEditPost(post)}
                  onDelete={handleDeletePost}
                />
              )}
            </div>
            <div className="w-full">
              <PostBody
                poster={post.content_url}
                postType={post.content_type}
                content={post.content}
              />
            </div>
          </div>

          <div className="w-full">
            <div className="my-3">
              <div className="border border-gray-800"></div>
              <ActionDataCount likesCount={likesCount} post={countComments} />
              <div className="px-4 py-1 flex justify-between items-center">
                <button
                  onClick={handleLikePost}
                  className={`cursor-pointer flex items-center text-sm  font-semibold  hover:text-blue-600  rounded-md p-0 ${
                    isLiked ? "text-blue-600 " : ""
                  }`}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    className="pe-1"
                    height="18"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"></path>
                  </svg>
                  {isLiked ? "Liked" : "Like"}
                </button>
                <button
                  onClick={() => setShowCommentModal(!showCommentModal)}
                  className="cursor-pointer flex items-center text-white font-semibold text-md hover:text-blue-600 px-4 rounded-md py-1"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    className="pe-1"
                    height="18"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9 9 0 0 0 8 15"></path>
                  </svg>
                  Comments
                </button>
                <PostSharedAction postId={post.id} />
              </div>
            </div>
          </div>
          <CommentSection
            post={post}
            showCommentModal={showCommentModal}
            onCommentAdded={handleCommentAdded}
            setShowCommentModal={setShowCommentModal}
          />
        </div>
      </div>

      {showTextArea && (
        <EditPost post={editingPost} onClose={() => setShowTextArea(false)} />
      )}

      {showImagePostModal && (
        <UploadModal
          post={editingPost}
          onClose={() => setShowImagePostModal(false)}
        />
      )}
      {showVideoPostModal && (
        <UploadVideoModal
          post={editingPost}
          onClose={() => setShowVideoPostModal(false)}
        />
      )}
    </>
  );
}
