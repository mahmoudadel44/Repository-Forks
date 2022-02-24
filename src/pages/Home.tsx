import { useState } from "react";
import { useSelector } from "react-redux";
import SearchForm from "../components/SearchForm";
import Repositories from "../components/Repositories";
import Pagination from "../components/Pagination";

const Home: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage] = useState(5);
  let allRepositories = useSelector((state: any) => state.Repositories.repos);
  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = allRepositories.slice(indexOfFirstRepo, indexOfLastRepo);
  const paginate = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };

  const paginateToPrevious = () => {
    setCurrentPage(currentPage - 1);
  };
  const paginateToNext = () => {
    setCurrentPage(currentPage + 1);
  };
  return (
    <>
      <h1 className="welcomeText animate__animated animate__fadeInDown animate__delay-1s">
        Welcome To Github
      </h1>
      <SearchForm />
      <Repositories allRepositories={currentRepos} />
      <Pagination
        reposPerPage={reposPerPage}
        allRepositories={allRepositories.length}
        paginate={paginate}
        paginateToPrevious={paginateToPrevious}
        paginateToNext={paginateToNext}
      />
    </>
  );
};

export default Home;
