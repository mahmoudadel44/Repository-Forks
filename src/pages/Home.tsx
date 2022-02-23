import { useState } from "react";
import { useSelector } from "react-redux";
import SearchForm from "../components/SearchForm";
import Repositories from "../components/Repositories";

const Home: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage, setReposPerPage] = useState(6);
  let allRepositories = useSelector(
    (state: any) => state.RepositoryReducer.repos
  );
  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = allRepositories.slice(indexOfFirstRepo, indexOfLastRepo);
  return (
    <>
      <h1 className="welcomeText">Welcome To Home</h1>
      <SearchForm />
      <Repositories allRepositories={currentRepos} />
    </>
  );
};

export default Home;
