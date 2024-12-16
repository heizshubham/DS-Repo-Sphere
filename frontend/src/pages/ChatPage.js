import React, { useState } from "react";
import RepoSelector from "../components/RepoSelector";
import ChatBox from "../components/ChatBox";

const ChatPage = () => {
  const [selectedRepo, setSelectedRepo] = useState(null);

  return (
    <div>
      <h1>Chat Service</h1>
      <RepoSelector onSelectRepo={setSelectedRepo} />
      {selectedRepo && <ChatBox repoId={selectedRepo} />}
    </div>
  );
};

export default ChatPage;
