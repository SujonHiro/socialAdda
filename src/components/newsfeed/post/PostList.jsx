import PostCard from "./PostCard";

export default function PostList({ posts }) {
  //console.log(posts[0].id);
  //<PostCard key={index} post={post} />
  //console.log(posts);

  return (
    <>
      {posts.length > 0 ? (
        posts.map((post) => <PostCard key={post.id} post={post} />)
      ) : (
        <p>No Data available</p>
      )}
      {/* <h1>Hello</h1> */}
    </>
  );
}
