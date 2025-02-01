function PostBody({ content, poster }) {
  return (
    <div className="px-4">
      <p className="mb-3">{content}</p>
      <img src={poster} className="rounded-md" alt="" />
    </div>
  );
}

export default PostBody;
