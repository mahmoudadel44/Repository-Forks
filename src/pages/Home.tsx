import axios from "axios";
import { useEffect, useState } from "react";

const Home: React.FC = () => {
  const [forks, setForks] = useState({});
  useEffect(() => {
    fetchRepos();
  });
  const fetchRepos: any = () => {
    axios
      .get(
        `https://api.github.com/search/repositories?q=Mernstack-Shopping-Cart&per_page=2`
      )
      .then((response) => console.log("response", response))
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <h1>Home</h1>
      <label>Forks</label>
      <input type="text" placeholder="Search For Forks" />{" "}
    </div>
  );
};

export default Home;
