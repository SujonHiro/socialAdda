import ImageStory from "./newsfeed/ImageStory";
import CreatePost from "./newsfeed/post/CreatePost";
import Post from "./newsfeed/post/Post";

function MiddleSideBar() {
  return (
    <div className="flex flex-1 flex-col gap-4 self-stretch">
      {/* <!--daily share story Section--> */}
      <ImageStory />
      {/*  <!--Create post Area--> */}

      <CreatePost />

      {/* <!--Post Card started--> */}
      <Post />
      {/* <!--Post Card ended--> */}
    </div>
  );
}

export default MiddleSideBar;
