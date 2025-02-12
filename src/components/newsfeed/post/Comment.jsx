import { Link } from "react-router";

import useAuth from "../../../hook/useAuth";
import {formatDate} from "../../../utils/formatime"
function Comment({comments}) {
  const { auth } = useAuth();

  return (
    <>
     {comments.length>0?(comments.map((comment)=>(
      <div key={comment.id}  className="flex items-start justify-start">
        <div className="shrink-0 self-start">
          <a href="#">
            <img
              src={auth.user.profile_picture_url}
              className="size-8 rounded-full"
              alt="profile"
            />
          </a>
        </div>
       
          <div className="w-full px-4">
          <div  >
            <div className="bg-[#202227] p-4 w-full">
              <div className=" flex justify-between items-center">
                <Link
                  to="#"
                  className="font-bold text-white text-lg hover:text-blue-600"
                >
                  {auth.user.name}
                </Link>
                <span className="text-normal text-sm"> {formatDate(comment.created_at)} </span>
              </div>
              <p>
               {comment.content}
              </p>
            </div>
            <ul className="pt-2 flex justify-start gap-4">
              <li>
                <a href="" className="text-sm font-normal hover:text-blue-600">
                  Like (5)
                </a>
              </li>
              <li>
                <a href="" className="text-sm font-normal hover:text-blue-600">
                  Replay
                </a>
              </li>
            </ul>
          </div>
          
        </div>
      </div>))):null}
    </>
  );
}

export default Comment;
