import React, { useState } from "react";
import { sendMessage, fetchChatHistory } from "../api";

const ChatBox = ({ repoId }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const loadChat = async () => {
    const history = await fetchChatHistory(repoId);
    setMessages(history);
  };

  const handleSend = async () => {
    if (input.trim()) {
      await sendMessage(repoId, input);
      setInput("");
      loadChat();
    }
  };

  React.useEffect(() => {
    if (repoId) loadChat();
  }, [repoId]);

  return (
    <div>
      <div className="chat-history">
        {messages.map((msg, idx) => (
          <div key={idx}>{msg.message}</div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default ChatBox;
