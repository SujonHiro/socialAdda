import { Link } from "react-router";
function Author({ post }) {
  //console.log(post.user.name);

  return (
    <div className="flex items-center gap-2 mb-3 p-4">
      <Link
        to="#"
        className="text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
      >
        <img src="#" className="rounded-full size-10" alt="postImage" />
      </Link>
      <div>
        <Link to="#" className="text-sm">
          {post.user.name}
        </Link>
        <p className="text-xs">4 Days ago</p>
      </div>
    </div>
  );
}

export default Author;
