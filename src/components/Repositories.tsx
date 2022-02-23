import React from "react";

//Css
import "../styles/Repositories.css";
const Repositories: React.FC<{ allRepositories: any[] }> = ({
  allRepositories,
}) => {
  return (
    <>
      {allRepositories.length ? (
        <table className="styled-table animate__animated animate__fadeInUp">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Owner</th>
              <th className="">Fork Link</th>
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
                    <button>Add To Favourite</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      ) : (
        ""
      )}
    </>
  );
};

export default Repositories;
