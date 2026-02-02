import React, { useState, useRef, useEffect } from "react";
import "./chat.css";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState("");
  const [activeChat, setActiveChat] = useState(0);
  const messagesEndRef = useRef(null);

  const chatUsers = [
    
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!message.trim()) return;
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setMessages([...messages, { from: "me", text: message, time }]);
    setMessage("");
  };

  return (
    <div className="chat-app">
      {/* SIDEBAR */}
      <div className="sidebar">
        <div className="sidebar-header">
          <h2>Chats</h2>
        </div>
        <div className="chat-list">
          {chatUsers.map((user) => (
            <div
              key={user.id}
              className={`chat-item ${activeChat === user.id ? 'active' : ''}`}
              onClick={() => setActiveChat(user.id)}
            >
              <div className="avatar">{user.name.charAt(0)}</div>
              <div className="user-details">
                <span className="name">{user.name}</span>
                <span className={`status ${user.status}`}>{user.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CHAT AREA */}
      <div className="chat-main">
        <div className="chat-header">
          <div className="avatar">{chatUsers[activeChat].name.charAt(0)}</div>
          <div className="header-info">
            <span className="name">{chatUsers[activeChat].name}</span>
            <span className={`status ${chatUsers[activeChat].status}`}>{chatUsers[activeChat].status}</span>
          </div>
        </div>

        <div className="messages">
          {messages.map((msg, i) => (
            <div key={i} className={`message ${msg.from}`}>
              <p>{msg.text}</p>
              <span className="time">{msg.time}</span>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="input-area">
          <input
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button onClick={sendMessage} disabled={!message.trim()}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
