import React, { useState } from "react";
import { useDispatch } from "react-redux";
import addToFavourites from "../redux/actions/FavouritesActions";

//Css
import "../styles/Repositories.css";
import FavouritesModal from "./Modal";
const Repositories: React.FC<{
  allRepositories: any[];
}> = ({ allRepositories }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [selectedRepo, setSelectedRepo] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (repo: any) => {
    setSelectedRepo(repo);
    setShow(true);
  };

  return (
    <>
      {allRepositories.length ? (
        <table className="styled-table animate__animated animate__fadeInUp">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Owner</th>
              <th>Fork Link</th>
              <th>Stars</th>
              <th>Favourites</th>
            </tr>
          </thead>
          <tbody className="animate__animated animate__fadeInUp animate__delay-1s">
            {allRepositories &&
              allRepositories.map((repo) => (
                <tr key={repo.id}>
                  <td>{repo.full_name}</td>
                  <td>{repo.owner.login}</td>
                  <td>{repo.forks_url}</td>
                  <td>{repo.stargazers_count}</td>
                  <td>
                    {/* <button onClick={() => dispatch(addToFavourites(repo))}>Add To Favourites</button> */}
                    <button onClick={() => handleShow(repo)}>
                      Add To Favourite
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      ) : null}

      <FavouritesModal
        handleClose={handleClose}
        show={show}
        handleSubmit={() => {
          dispatch(addToFavourites(selectedRepo));
          handleClose();
        }}
      />
    </>
  );
};

export default Repositories;
