import React, { useEffect, useState } from "react";
import LeftBar from "../../components/leftbar/LeftBar";
import "./chat.scss";
import { io } from "socket.io-client";

const ChatPage = () => {
  const [socket, setSocket] = useState();

  useEffect(() => {
    const socket = io("http://localhost:5000");
    socket.on("connection", () => {
      console.log("connected");
    });
    setSocket(socket);
  }, []);

  const sendMsg = (e) => {
    console.log(sendMsg);
    socket.emit("sendMessage", e.target.value);
  };
  return (
    <div className="chat">
      <div className="chatWrapper">
        <div className="leftBar">
          <LeftBar />
        </div>
        <div className="chatMain">
          <form action="">
            <textarea
              onChange={sendMsg}
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
