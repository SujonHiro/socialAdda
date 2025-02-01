import ReactPlayer from "react-player";

function PostBody({ content, poster, postType }) {
  return (
    <div className="px-4">
      <p className="mb-3">{content}</p>
      {postType === "video" ? (
        <div className="flex justify-center items-center h-screen bg-gray-900">
          <ReactPlayer
            url={poster}
            controls
            playing // Auto-play enabled
            loop // Video will loop continuously
            muted // Mutes the video to avoid autoplay restrictions
            width="640px"
            height="360px"
          />
        </div>
      ) : (
        <img src={poster} className="rounded-md" alt="title" />
      )}
    </div>
  );
}

export default PostBody;
