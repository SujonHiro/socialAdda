import { useEffect, useState } from "react";
import io from "socket.io-client";
import ChatList from "../components/messeges/ChatList";
import UserList from "../components/messeges/UserList";
import useAuth from "../hook/useAuth";
import useAxios from "../hook/useAxios";

function Conversation() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [socket, setSocket] = useState(null);
  const [users, setusers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const { auth } = useAuth();

  console.log("messages", messages);

  // const seletedUser=
  const newselectedUser = users.filter((user) => user.id !== auth.user.id);

  useEffect(() => {
    const fetcUser = async () => {
      const response = await useAxios.get("/users");
      if (response.status === 200) {
        setusers(response.data.users);
      }
    };
    fetcUser();
  }, [auth.user.id]);

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  useEffect(() => {
    if (!selectedUser || !socket) return;

    // Fetch previous messages
    useAxios.get(`/messages/${selectedUser.id}`).then((response) => {
      if (response.status === 200) {
        setMessages(response.data);
      }
    });

    const handleNewMessage = (message) => {
      setMessages((prev) => [message, ...prev]);
    };

    socket.on("sendMessage", handleNewMessage);

    return () => {
      socket.off("sendMessage", handleNewMessage);
    };
  }, [selectedUser, socket]);

  useEffect(() => {
    const token = sessionStorage.getItem("authToken");
    if (!token) return;

    const newSocket = io("wss://server-for-social-dy6q.onrender.com", {
      auth: { token },
      transports: ["websocket"],
      reconnectionAttempts: 5,
      timeout: 10000,
    });

    newSocket.on("connect", () => {
      console.log("Connected with ID:", newSocket.id);
    });

    newSocket.on("disconnect", (reason) => {
      console.log("Disconnected:", reason);
    });

    newSocket.on("connect_error", (err) => {
      console.error("Connection Error:", err.message);
    });

    setSocket(newSocket);

    return () => {
      if (newSocket.connected) {
        newSocket.disconnect();
      }
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newMessage.trim() || !selectedUser) return;

    socket.emit("sendMessage", {
      receiverId: selectedUser.id,
      message: newMessage,
    });

    setNewMessage("");
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="text-[#ffffff] w-full mx-auto overflow-hidden">
          <div className="flex border border-[#1f1f1f] rounded-md">
            <div className="md:w-1/3   @md:block bg-[#141519] p-4 border-r-2 border-[rgb(31,31,31)]">
              <div className="flex justify-between items-center p-2">
                <div className="inline-flex items-center gap-2">
                  <h2 className="text-xl font-bold">Active chats</h2>
                  <span className="inline-block bg-green-500 bg-opacity-10 text-green-700 text-sm font-medium px-3 py-1 rounded-md">
                    {newselectedUser.length}
                  </span>
                </div>
              </div>

              <div className="border-t-2 border-[#1f1f1f] @2xl:h-[480px] @xl:h-[320px] h-[450px] overflow-auto p-2">
                {/* <UserList /> */}
                <UserList
                  users={newselectedUser}
                  onSelectedUser={handleUserSelect}
                />
              </div>
            </div>

            <div className="md:w-2/3 w-full  p-2 bg-[#141519]">
              <ChatList messages={messages} selectedUser={selectedUser} />
              <div>
                <form
                  className="flex items-center gap-2 mt-4"
                  onSubmit={handleSubmit}
                >
                  <input
                    type="text"
                    className="w-full bg-[#202227] p-2 rounded-md text-sm text-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    placeholder="Type a message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Conversation;
