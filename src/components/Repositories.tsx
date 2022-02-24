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
    addToFirebase(repo);
  };
  const addToFirebase = (repo: any) => {
    const { full_name, forks_url, stargazers_count } = repo;
    const { login } = repo.owner;
    fetch("https://github-repositories-728fb-default-rtdb.firebaseio.com/rposdata.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        full_name,
        forks_url,
        stargazers_count,
        login,
      }),
    });
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
