import { Link } from "react-router-dom";

//Css
import "../styles/Navbar.css";
const Navbar: React.FC = () => {
  return (
    <div className=" navbar">
      <ul>
        <li>
          <Link to="/favourites">
            <div className="favouritesContainer">
              {" "}
              <i className="fa-solid fa-heart fa-2x"></i>
              <span>Favourites</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/">
            <div className="homeContainer">
              {" "}
              <i className="fa-solid fa-house fa-2x"></i>
              <span>Home</span>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
