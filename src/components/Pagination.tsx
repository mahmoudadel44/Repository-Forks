//Css
import "../styles/Pagination.css";

const Pagination: React.FC<{
  reposPerPage: any;
  allRepositories: any;
  paginate: any;
  paginateToFirst: any;
  paginateToLast: any;
}> = ({
  allRepositories,
  reposPerPage,
  paginate,
  paginateToFirst,
  paginateToLast,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(allRepositories / reposPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      {allRepositories ? (
        <div className="pagination">
          <a href="#" onClick={() => paginateToFirst()}>
            &laquo;
          </a>
          {pageNumbers.map((number) => (
            <a key={number} onClick={() => paginate(number)} href="#">
              {number}
            </a>
          ))}
          <a href="#" onClick={() => paginateToLast()}>
            &raquo;
          </a>
        </div>
      ) : (
        null
      )}
    </>
  );
};

export default Pagination;
