import { Link } from "react-router";
import User from "../../../assets/images/avatars/user.jpg";
import ActionDataCount from "./ActionDataCount";
import Author from "./Author";
import Comment from "./Comment";
import CreateComment from "./CreateComment";
import PostAction from "./PostAction";
import PostBody from "./PostBody";

export default function PostCard({ post }) {
  return (
    <>
      <div className="mb-3 bg-[#141519] rounded-md">
        <div className="flex justify-between items-center">
          <Author post={post} />
          <PostAction />
        </div>

        <div className="w-full">
          <PostBody
            poster={post.content_url}
            postType={post.content_type}
            content={post.content}
          />

          <div className="my-3">
            <div className="border border-gray-800"></div>
            <ActionDataCount post={post} />
            <div className="px-4 py-1 flex justify-between items-center">
              <a
                href="#"
                className="flex items-center text-sm text-white font-semibold  hover:text-blue-600  rounded-md p-0"
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
                Like
              </a>
              <button className="cursor-pointer flex items-center text-white font-semibold text-md hover:text-blue-600 px-4 rounded-md py-1">
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
              <a
                href="#"
                className="flex items-center text-white font-semibold text-md hover:text-blue-600 px-4 rounded-md py-1"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  className="scale-x-[-1] inline-block  ps-1"
                  height="16"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5.921 11.9 1.353 8.62a.72.72 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z"></path>
                </svg>
                Share
              </a>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="flex gap-2 items-center">
            <Link to="#">
              <img src={User} className="size-8 rounded-full" alt="" />
            </Link>
            {/* <!--comment Post started--> */}
            <CreateComment />
          </div>
        </div>
        {/* <!--posted Comment started here--> */}
        <div className="p-4">
          <Comment />
        </div>
      </div>
    </>
  );
}
