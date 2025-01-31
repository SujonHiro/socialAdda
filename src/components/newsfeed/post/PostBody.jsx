import Cover from "../../../assets/images/cover.jpg";
function PostBody() {
  return (
    <div className="px-4">
      <p className="mb-3">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
        eveniet fuga, blanditiis sint ducimus nisi illo, facilis non ab esse
        qui, neque rerum. Odio expedita iure autem modi fuga fugit...
      </p>
      <img src={Cover} className="rounded-md" alt="" />
    </div>
  );
}

export default PostBody;
