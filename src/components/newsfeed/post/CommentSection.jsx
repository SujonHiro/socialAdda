import { Link } from "react-router";
import useAuth from "../../../hook/useAuth";
import Comment from "./Comment";
import CreateComment from "./CreateComment";

function CommentSection({
  post,
  showCommentModal,
  onCommentAdded,
  setShowCommentModal,
}) {
  const { auth } = useAuth();

  return (
    <div className="p-4">
      <div className="flex  gap-2 items-center ">
        <Link to="#" className="shrink-0">
          <img
            src={auth.user.profile_picture_url}
            className="size-8 rounded-full "
            alt=""
          />
        </Link>
        {/* <!--comment Post started--> */}
        <CreateComment
          setShowCommentModal={setShowCommentModal}
          postId={post.id}
          onCommentAdded={onCommentAdded}
        />
      </div>
      <div className="px-2 py-4">
        {showCommentModal && (
          <Comment setShowCommentModal={setShowCommentModal} postId={post.id} />
        )}
      </div>
    </div>
  );
}

export default CommentSection;
