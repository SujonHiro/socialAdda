function SentMessage() {
  return (
    <>
      <form action="" className="flex items-center gap-2 mt-4">
        <input
          type="text"
          className="w-full bg-[#202227] p-2 rounded-md text-sm text-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-600"
          placeholder="Type a message"
        />
        <button
          className="bg-blue-600 p-2 rounded-md hover:bg-blue-700"
          type="submit"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            className="fs-6"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"></path>
          </svg>
        </button>
      </form>
    </>
  );
}

export default SentMessage;
