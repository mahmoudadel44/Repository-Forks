//Components
import FavouritesCard from "../components/FavouritesCard";

//Css
import "../styles/Favourites.css";
const Favourites: React.FC = () => {
  return (
    <div className="allCards">
      <FavouritesCard />
      <FavouritesCard />
      <FavouritesCard />
      <FavouritesCard />
      <FavouritesCard />
    </div>
  );
};

export default Favourites;
