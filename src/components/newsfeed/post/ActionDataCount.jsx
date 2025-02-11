function ActionDataCount({ post,likesCount }) {
  return (
    <div className="my-2 px-4 flex gap-2 justify-between items-center">
      <small className="text-xs text-gray-400">
        Likes ({ likesCount })
      </small>
      <small className="text-xs text-gray-400">
        Comments ({post.comments_count})
      </small>
    </div>
  );
}

export default ActionDataCount;
