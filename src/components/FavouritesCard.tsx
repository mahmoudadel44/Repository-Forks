//Css
import "../styles/Favourites.css";

const FavouritesCard: React.FC<{ favouriteData: any }> = ({
  favouriteData,
}) => {
  return (
    <div className="card">
      <div>
        <ul key={favouriteData.id}>
          <li>FullName : {favouriteData.full_name}</li>
          {/* <li>Owner : Mahmoud</li>
          <li>Stars : Mahmoud</li>
          <li>ForkLink : Mahmoud</li> */}
        </ul>
      </div>
    </div>
  );
};

export default FavouritesCard;
