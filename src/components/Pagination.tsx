//Css
import "../styles/Pagination.css";

const Pagination: React.FC<{
  reposPerPage: any;
  allRepositories: any;
  paginate: any;
}> = ({
  allRepositories,
  reposPerPage,
  paginate,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(allRepositories / reposPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      {allRepositories && (
        <div className="pagination">
          {/* <a href="#">
            &laquo;
          </a> */}
          {pageNumbers.map((number) => (
            <a href="#" key={number} onClick={() => paginate(number)}>
              {number}
            </a>
          ))}
          {/* <a href="#">
            &raquo;
          </a> */}
        </div>
      )}
    </>
  );
};

export default Pagination;
