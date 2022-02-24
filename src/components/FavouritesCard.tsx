//Css
import "../styles/Favourites.css";

const FavouritesCard: React.FC<{ favouriteData: any }> = ({
  favouriteData,
}) => {
  return (
    <div className="card animate__animated animate__fadeInUp">
      <div>
        <ul key={favouriteData.id}>
          <li>FullName : {favouriteData.full_name}</li>
          <li>Owner : {favouriteData.owner.login}</li>
          <li>Forks Url : {favouriteData.forks_url}</li>
          <li>Stars Count : {favouriteData.stargazers_count}</li>
        </ul>
      </div>
    </div>
  );
};

export default FavouritesCard;
