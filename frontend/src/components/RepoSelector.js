import React, { useEffect, useState } from "react";
import { fetchRepos } from "../api";

const RepoSelector = ({ onSelectRepo }) => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const loadRepos = async () => {
      const repoList = await fetchRepos();
      setRepos(repoList);
    };
    loadRepos();
  }, []);

  return (
    <select onChange={(e) => onSelectRepo(e.target.value)}>
      <option value="">Select a repository</option>
      {repos.map((repo) => (
        <option key={repo.id} value={repo.id}>
          {repo.name}
        </option>
      ))}
    </select>
  );
};

export default RepoSelector;
