import React, { useState } from "react";
import "./ChatApp.css";
import { FaSearch, FaPhoneAlt, FaVideo, FaPaperPlane } from "react-icons/fa";

const messages = [
  { name: "Albert Flores", time: "10:37", text: "Hi, I'm confirming your check-in..." },
  { name: "Annette Black", time: "9:15", text: "I'm arriving tomorrow afternoon...", unread: true },
  { name: "Edwin Johnson", time: "9:01", text: "Cool! Is there a coffee machine...", active: true },
  { name: "Jerome Bell", time: "Thu", text: "I've received your booking reque..." },
  { name: "Darrell Steward", time: "Thu", text: "Hello! Just a reminder that che..." },
  { name: "Steven Jordan", time: "Wed", text: "Sounds good! Could you confir...", unread: true },
  { name: "Wanda Hall", time: "Wed", text: "Thanks for the update! Just to d..." },
  { name: "Victor Olson", time: "Wed", text: "Hi, just letting you know that the..." }
];

const initialChatHistory = {
  "Edwin Johnson": [
    { from: "left", text: "Hi! I'm interested in the apartment listing I saw online. Is it still available for next weekend?" },
    { from: "right", text: "Hi there! Yes, it's available on those dates. Just to confirm, will it be just you, or are you traveling with others?" },
    { from: "left", text: "We're looking for a place with a nice view or a cozy balcony, if possible." },
    { from: "left", text: "It'll be me and one friend." },
    {
      from: "right",
      image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115",
      text: "Great! The apartment has a small balcony with a view of the sea — perfect for morning coffee! 🌊☕"
    },
    { from: "left", text: "Cool! Is there a coffee machine or kettle in the kitchen?" }
  ],
  "Albert Flores": [
    { from: "left", text: "Hi, I'm confirming your check-in..." },
    { from: "right", text: "Thank you! Everything’s set." }
  ]
};

const ChatInterface = () => {
  const [selectedUser, setSelectedUser] = useState("Edwin Johnson");
  const [chatHistory, setChatHistory] = useState(initialChatHistory);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const updatedMessages = [...(chatHistory[selectedUser] || []), { from: "right", text: input }];
    setChatHistory({
      ...chatHistory,
      [selectedUser]: updatedMessages
    });
    setInput("");
  };

  return (
    <div className="chat-wrapper">
      {/* Sidebar */}
      <div className="chatsidebar">
        <div className="chatsidebar-header">
          <h2>Messages</h2>
          <div className="tabs">
            <button className="active">General 6</button>
            <button>Archive 2</button>
          </div>
          <div className="search">
            <FaSearch />
            <input type="text" placeholder="Search..." />
          </div>
        </div>

        <ul className="message-list">
          {messages.map((msg, i) => (
            <li
              key={i}
              className={`message-item ${selectedUser === msg.name ? "active" : ""}`}
              onClick={() => setSelectedUser(msg.name)}
            >
              <div className="avatar" />
              <div className="message-info">
                <div className="message-name-time">
                  <span>{msg.name}</span>
                  <span>{msg.time}</span>
                </div>
                <div className="message-text">
                  {msg.text}
                  {msg.unread && <span className="unread-dot" />}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Chat Area */}
      <div className="chat-area">
        <div className="chat-header">
          <div className="chat-user">
            <div className="avatar" />
            <div className="user-info">
              <strong>{selectedUser}</strong>
              <span>1-Bedroom Apartment, 45 m²</span>
            </div>
          </div>
          <div className="chat-tools">
            <span className="price">$80/night</span>
            <FaPhoneAlt className="icon" />
            <FaVideo className="icon" />
            <div className="more-icon">⋮</div>
          </div>
        </div>

        <div className="chat-messages">
          {(chatHistory[selectedUser] || []).map((msg, i) =>
            msg.image ? (
              <div key={i} className="message right image">
                <img src={msg.image} alt="shared" />
                <p>{msg.text}</p>
              </div>
            ) : (
              <div key={i} className={`message ${msg.from}`}>
                {msg.text}
              </div>
            )
          )}
        </div>

        <div className="chat-input">
          <input
            type="text"
            placeholder="Your message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button className="send-btn" onClick={handleSend}>
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
