import { useState } from "react";
import ReactPlayer from "react-player";

function PostBody({ content, poster, postType }) {
  const [expanded, setExpanded] = useState(false);

  const maxLength = 350;
  const safeContent = content || "";
  const shouldTruncate = safeContent.length > maxLength;
  const visibleContent =
    shouldTruncate && !expanded
      ? safeContent.slice(0, maxLength) + " ... "
      : safeContent;
  return (
    <div className="px-4">
      <p
        className="inline"
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
          <div className="w-full flex justify-center self-center">
            <div className="relative w-full max-w-[800px] aspect-video rounded-b-md overflow-hidden">
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
          <img
            src={poster}
            className="mx-auto max-w-full  rounded-md my-2"
            alt="poster"
          />
        </>
      )}
    </div>
  );
}

export default PostBody;
