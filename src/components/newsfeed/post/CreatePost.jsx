import { useState } from "react";
import User from "../../../assets/images/avatars/user.jpg";
import PostWithFile from "../PostWithFile";
import ContentPost from "./ContentPost";
import PostWithVideo from "./PostWithVideo";
function CreatePost() {
  const [postEntry, setPostEntry] = useState(false);

  return (
    <>
      <div className="bg-[#141519] p-4 rounded-md my-3">
        {postEntry ? (
          <ContentPost onCreate={() => setPostEntry(false)} />
        ) : (
          <div className="flex gap-4">
            <div className="relative inline-block shrink-0">
              <img src={User} alt="" className="size-8 rounded-full" />
            </div>
            <div className="w-full ">
              <textarea
                className="form-control focus:outline-none border-0"
                placeholder="Share your thoughts..."
                onClick={() => setPostEntry(true)}
              ></textarea>
            </div>
          </div>
        )}
        <ul className="flex justify-between items-center mt-2 p-0">
          <div className="flex items-center gap-2">
            <li>
              <PostWithFile />
            </li>
            <li>
              <PostWithVideo />
            </li>
          </div>
        </ul>
      </div>
    </>
  );
}

export default CreatePost;
