import PostCard from "./PostCard";

export default function PostList({ posts }) {
  // Check if posts is an array and if it has elements
  /* if (!Array.isArray(posts)) {
    return <div>No posts available</div>;
  } */

  //console.log("post.data", posts.data);

  return (
    <>
      {posts.data ? (
        posts.data.map((post) => <PostCard key={post.id} post={post} />)
      ) : (
        <div>No posts available</div>
      )}
    </>
  );
}
