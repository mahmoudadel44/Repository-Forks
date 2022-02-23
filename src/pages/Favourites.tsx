//Components
import { useState } from "react";
import { useSelector } from "react-redux";
import FavouritesCard from "../components/FavouritesCard";

//Css
import "../styles/Favourites.css";
const Favourites: React.FC = () => {
  const allFavourites = useSelector(
    (state: any) => state.Favourites.favourites
  );
  return (
    <div className="allCards">
      {allFavourites &&
        allFavourites.map((favourite:{}) => (
          <FavouritesCard favouriteData={favourite} />
        ))}
    </div>
  );
};

export default Favourites;
