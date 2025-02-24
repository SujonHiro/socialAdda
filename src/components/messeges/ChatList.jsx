import { useEffect, useRef } from "react";

function ChatList({ messages, selectedUser }) {
  const scrollRef = useRef(null);
  const lastMessageRef = useRef(null);

  // Smooth scroll to bottom whenever messages update
  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [messages]);

  return (
    <div
      ref={scrollRef}
      className="border-t-2 w-full border-[#1f1f1f] @2xl:h-[480px] @xl:h-[320px] h-[450px] scrollbar overflow-auto"
    >
      <ul className="flex flex-col gap-4 scroll-smooth scrollbar-track-black my-2 px-2 ">
        {messages
          .sort((a, b) => new Date(a.created_at) - new Date(b.created_at)) // Ensure messages are sorted by time
          .map((message, index) => (
            <li
              key={index}
              ref={index === messages.length - 1 ? lastMessageRef : null} // Attach ref to last message
              className={`flex w-full items-start gap-2 ${
                message.sender_id !== selectedUser.id
                  ? "justify-end ml-auto" // Right-side (Sender)
                  : "justify-start mr-auto" // Left-side (Receiver)
              }`}
            >
              {/* Show Avatar Only for Receiver */}
              {message.receiver_id !== selectedUser.id && (
                <img
                  src={selectedUser.profile_picture_url}
                  className="size-8 rounded-full"
                  alt="User"
                />
              )}

              <div
                className={`px-2 py-4 rounded-md max-w-[70%] ${
                  message.sender_id !== selectedUser.id
                    ? "bg-blue-600 text-gray-100 "
                    : "bg-[#202227] text-gray-300"
                }`}
              >
                <p className="text-sm font-medium ">{message.message}</p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ChatList;
