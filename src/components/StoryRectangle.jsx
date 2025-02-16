import { Link } from "react-router";

function StoryRectangle({ user, story, onClick }) {
  return (
    <button
      className="w-[120px] h-[150px] rounded-lg flex-shrink-0 cursor-pointer"
      onClick={onClick}
    >
      <Link to="#">
        <span className="relative mx-auto flex flex-col items-center">
          <img src={story} className="w-[120px] h-[150px] rounded-lg" alt="" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent h-1/3 "></div>
          <span className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-sm text-white">
            {user.name}
          </span>
        </span>
      </Link>
    </button>
  );
}

export default StoryRectangle;
