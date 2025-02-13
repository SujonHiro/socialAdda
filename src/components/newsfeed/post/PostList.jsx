import PostCard from "./PostCard";

export default function PostList({ posts }) {
  return (
    <>
      {posts.length > 0 ? (
        posts.map((post) => <PostCard key={post.id} post={post} />)
      ) : (
        <p>No Data available</p>
      )}
    </>
  );
}
