import React, { useState } from "react";
import { FiSend } from "react-icons/fi";
import Navbar from "./components/Navbar"; 
//import ChatPage from "./pages/ChatPage"; 


const App = () => {
  const [userName, setUserName] = useState("");
  const [isNameEntered, setIsNameEntered] = useState(false);
  const [selectedRepo, setSelectedRepo] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const repositories = [
    "React Project",
    "Node.js Backend",
    "Python Script",
    "Machine Learning Model",
    "Full-Stack App",
  ];

  const handleNameSubmit = () => {
    if (userName.trim()) {
      setIsNameEntered(true);
    }
  };

  const handleAction = () => {
    if (searchInput || selectedRepo) {
      alert(`Analyzing "${selectedRepo}" with input: "${searchInput}"`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Header */}
      <header className="bg-blue-700 text-white py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">RepoAI</h1>
        {/* <nav>
          <ul className="flex space-x-4">
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">Profile</li>
            <li className="hover:underline cursor-pointer">Settings</li>
          </ul>
        </nav> */}
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-gray-100 flex flex-col items-center justify-center px-4">
        {!isNameEntered ? (
          <div className="w-full max-w-md">
            <h2 className="text-xl mb-4">Welcome to the AI Analyzer!</h2>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 border border-gray-300 rounded focus:outline-blue-500"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <button
              onClick={handleNameSubmit}
              className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-all"
            >
              Continue
            </button>
          </div>
        ) : (
          <div className="w-full max-w-3xl">
            <div className="text-center mb-6">
              <h2 className="text-xl font-semibold">
                Hi, {userName}! Select a repository to analyze.
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row items-center border border-gray-300 rounded overflow-hidden">
              <select
                className="p-3 w-full sm:w-auto flex-grow bg-white focus:outline-none"
                value={selectedRepo}
                onChange={(e) => setSelectedRepo(e.target.value)}
              >
                <option value="">Select Repository</option>
                {repositories.map((repo, index) => (
                  <option key={index} value={repo}>
                    {repo}
                  </option>
                ))}
              </select>
              <input
                type="text"
                placeholder="Type a query..."
                className="w-full sm:w-auto flex-grow p-3 border-t sm:border-t-0 sm:border-l focus:outline-none"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <button
                onClick={handleAction}
                className="bg-blue-500 p-3 w-full sm:w-auto text-white hover:bg-blue-600 transition-all"
              >
                <FiSend size={20} />
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Chat Page */}
      {/* <ChatPage /> */}

    
    </div>
  );
};

export default App;
