import { useEffect, useState } from "react";
import io from "socket.io-client";
import ChatList from "../components/messeges/ChatList";
import SentMessage from "../components/messeges/SentMessage";
import UserList from "../components/messeges/UserList";
import useAuth from "../hook/useAuth";
import useAxios from "../hook/useAxios";

function Conversation() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const { auth } = useAuth();

  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const token = sessionStorage.getItem("authToken");
    console.log(token);

    if (!token) return;

    const newSocket = io("http://localhost:3001", {
      auth: { token },
      transports: ["websocket"],
      reconnectionAttempts: 5,
      timeout: 10000,
    });

    useAxios
      .get(`/messages/${auth.user.id}`)
      .then((response) => {
        setMessages(response.data);
      })
      .catch((error) => console.error("Fetch error:", error));

    newSocket.on("connect", () => {
      console.log("Connected with ID:", newSocket.id);
    });

    newSocket.on("disconnect", (reason) => {
      console.log("Disconnected:", reason);
    });

    newSocket.on("connect_error", (err) => {
      console.error("Connection Error:", err.message);
    });

    useAxios
      .get(`/messages/${auth.user.id}`)
      .then((response) => {
        console.log(response);

        setMessages(response.data);
      })
      .catch((error) => console.error("Fetch error:", error));
    setSocket(newSocket);
    // Cleanup function
    return () => {
      if (newSocket.connected) {
        newSocket.disconnect();
      }
    };
  }, [auth.user.id]);

  return (
    <>
      <div className="container mx-auto">
        <div className="text-[#ffffff] w-full mx-auto overflow-hidden">
          <div className=" flex border border-[#1f1f1f] rounded-md">
            {/* left Side */}
            <div className="md:w-1/3 hidden @md:block bg-[#141519]  p-4 border-r-2 border-[rgb(31,31,31)]">
              <div className="flex justify-between items-center p-2">
                <div className="inline-flex items-center gap-2">
                  <h2 className="text-xl font-bold">Active chats</h2>
                  <span className="inline-block bg-green-500 bg-opacity-10 text-green-700 text-sm font-medium px-3 py-1 rounded-md">
                    6
                  </span>
                </div>
                <button className="bg-[#1f1f1f] p-2 rounded-md hover:bg-blue-600">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"></path>
                    <path
                      fillRule="evenodd"
                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                    ></path>
                  </svg>
                </button>
              </div>

              <div className="border-t-2 border-[#1f1f1f] @2xl:h-[480px] @xl:h-[320px] h-[450px]  overflow-auto  p-2">
                <UserList />
              </div>
            </div>
            {/* right Side */}
            <div className="md:w-2/3  p-2 bg-[#141519]">
              <ChatList />
              <div>
                <SentMessage />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Conversation;
