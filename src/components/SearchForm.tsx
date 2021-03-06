import { useState } from "react";
import { useDispatch } from "react-redux";
import { getRepositories } from "../redux/actions/SearchActions";

//Css
import "../styles/SearchForm.css";
const SearchForm: React.FC = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const handleChange = (e: any) => {
    setSearchText(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(getRepositories(searchText));
    setSearchText("");
  };
  return (
    <div className="searchFormWrapper animate__animated animate__fadeInDown animate__delay-1s">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search For repositorie ......."
          onChange={handleChange}
          className="searchInput"
          value={searchText}
        />
        <button className="searchBtn">Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
