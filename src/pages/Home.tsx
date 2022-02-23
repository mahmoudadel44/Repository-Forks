import { useState } from "react";
import { useSelector } from "react-redux";
import SearchForm from "../components/SearchForm";
import Repositories from "../components/Repositories";
import Pagination from "../components/Pagination";

const Home: React.FC = () => {
  const [favourites, setFavourites] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage, setReposPerPage] = useState(5);
  let allRepositories = useSelector((state: any) => state.Repositories.repos);
  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = allRepositories.slice(indexOfFirstRepo, indexOfLastRepo);
  const paginate = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };
  // const handleFavourite = (repo: any) => {
  //   const newFavouriteList: any = [...favourites, repo];
  //   setFavourites(newFavouriteList);
  // };

  return (
    <>
      <h1 className="welcomeText animate__animated animate__fadeInDown animate__delay-1s">
        Welcome To Home
      </h1>
      <SearchForm />
      <Repositories
        allRepositories={currentRepos}
        // handleFavourite={handleFavourite}
      />
      <Pagination
        reposPerPage={reposPerPage}
        allRepositories={allRepositories.length}
        paginate={paginate}
      />
    </>
  );
};

export default Home;
