import axios from "axios";

const API_BASE = "http://localhost:8000";

export const fetchRepos = async () => {
  const response = await axios.get(`${API_BASE}/github/repos`);
  return response.data.repositories;
};

export const fetchChatHistory = async (repoId) => {
  const response = await axios.get(`${API_BASE}/chat/history?repo_id=${repoId}`);
  return response.data.history;
};

export const sendMessage = async (repoId, message) => {
  const response = await axios.post(`${API_BASE}/chat/new`, { repo_id: repoId, message });
  return response.data;
};
