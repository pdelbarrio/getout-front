import axios from "axios";
import { useEffect, useState } from "react";

export type Props = {
  userFrom?: string;
  spotId: string;
  spotName: string;
  spotImage: string;
};

function Favorite({ userFrom, spotId, spotName, spotImage }: Props) {
  const [favoriteNumber, setFavoriteNumber] = useState<number>(0);
  const [favorited, setFavorited] = useState<boolean>(false);

  const variable = {
    userFrom: userFrom,
    spotId: spotId,
    spotName: spotName,
    spotImage: spotImage,
  };

  useEffect(() => {
    //TODO:  subsitute alerts by Toastify?

    const authAxios = axios.create({
      baseURL: import.meta.env.VITE_API_BASE_URL as string,
      withCredentials: true,
    });

    const favNumAction = async () => {
      await authAxios
        .post("/favorites/favoritenumber", variable)
        .then((response) => {
          if (response.data.success) {
            console.log(response.data.favoritenumber);
            setFavoriteNumber(response.data.favoritenumber);
          } else {
            alert("Failed to get favoriteNumber");
          }
        });
    };

    favNumAction().catch(console.error);

    const favoritedAction = async () => {
      await authAxios
        .post("/favorites/favorited", variable)
        .then((response) => {
          if (response.data.success) {
            console.log(response.data.favorited);
            setFavorited(response.data.favorited);
          } else {
            alert("Failed to get Favorite Info");
          }
        });
    };

    favoritedAction().catch(console.error);
  }, []);

  const onClickFavorite = async () => {
    const authAxios = axios.create({
      baseURL: import.meta.env.VITE_API_BASE_URL as string,
      withCredentials: true,
    });

    if (favorited) {
      //When already added
      await authAxios
        .post("/favorites/removefromfavorites", variable)
        .then((response) => {
          if (response.data.success) {
            setFavoriteNumber(favoriteNumber - 1);
            setFavorited(!favorited);
          } else {
            alert("Failed to remove from favorites");
          }
        });
    } else {
      //When not added yet
      await authAxios
        .post("/favorites/addtofavorites", variable)
        .then((response) => {
          if (response.data.success) {
            setFavoriteNumber(favoriteNumber + 1);
            setFavorited(!favorited);
          } else {
            alert("Failed to add to favorites");
          }
        });
    }
  };

  return (
    <div>
      <button onClick={onClickFavorite}>
        {favorited ? "Remove from favorites" : "Add to Favorites"}
        {favoriteNumber}
      </button>
    </div>
  );
}

export default Favorite;
