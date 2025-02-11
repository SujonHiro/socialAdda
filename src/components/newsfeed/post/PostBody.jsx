import { useState } from "react";
import ReactPlayer from "react-player";

function PostBody({ content, poster, postType }) {
  const [expanded, setExpanded] = useState(false);

  const maxLength = 350; 
  const shouldTruncate = content.length > maxLength;
  const visibleContent =
    shouldTruncate && !expanded
      ? content.slice(0, maxLength) + " ... "
      : content;
  return (
    <div className="px-4">
      <p
        className="mb-3 inline"
        dangerouslySetInnerHTML={{
          __html: visibleContent,
        }}
      />
      {shouldTruncate && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-blue-500 cursor-pointer"
        >
          {expanded ? " See Less" : " See More"}
        </button>
      )}
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
          <img src={poster} className="rounded-md" alt="poster" />
        </>
      )}
    </div>
  );
}

export default PostBody;
