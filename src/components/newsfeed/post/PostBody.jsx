import ReactPlayer from "react-player";

function PostBody({ content, poster, postType }) {
  return (
    <div className="px-4">
      <p className="mb-3" dangerouslySetInnerHTML={{ __html: content }} />
      {postType === "video" && (
        <>
          <div className="w-full flex justify-center">
            <div className="relative w-full md:w-[720px] lg:w-[900px] rounded-b-md">
              <ReactPlayer
                url={poster}
                width="100%"
                height="100%"
                controls
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </>
      )}
      {postType === "image" && (
        <>
          <img src={poster} className="rounded-md" alt="title" />
        </>
      )}
    </div>
  );
}

export default PostBody;
