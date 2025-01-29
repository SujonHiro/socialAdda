function CreateComment() {
  return (
    <>
      <form className="w-full relative">
        <input
          type="text"
          className="border border-[#202227] form-control focus:outline-none focus:border-blue-600"
          placeholder="Add a comment..."
        />
        <button className="absolute right-0 top-[50%] hover:text-blue-600 block p-[1rem] transform translate-y-[-50%]">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"></path>
          </svg>
        </button>
      </form>
    </>
  );
}

export default CreateComment;
