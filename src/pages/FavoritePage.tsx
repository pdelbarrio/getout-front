import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth.context";
import { FavoritesContainer } from "../ui/FavoritesContainer";

//FALTA TIPAR TODO:

export type FavoriteSpots = {
  spotId: string;
  spotName: string;
  spotImage: string;
  spotUrl: string;
};

function FavoritePage() {
  const [favoritedSpots, setFavoritedSpots] = useState<FavoriteSpots[]>([]);
  const { user } = useContext(AuthContext);

  const variable = { userFrom: user?._id };

  useEffect(() => {
    getFavoriteSpots().catch(console.error);
    //
  }, []);

  const authAxios = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL as string,
    withCredentials: true,
  });

  const getFavoriteSpots = async () => {
    await authAxios
      .post("/favorites/getfavoritedspots", variable)
      .then((response) => {
        if (response.data.success) {
          setFavoritedSpots(response.data.favorites);
        } else {
          alert("Failed to get favorited spots");
        }
      });
  };

  const onClickRemove = async (spotId: string) => {
    const variable = {
      spotId: spotId,
      userFrom: user?._id,
    };

    console.log(variable);
    const authAxios = axios.create({
      baseURL: import.meta.env.VITE_API_BASE_URL as string,
      withCredentials: true,
    });

    await authAxios
      .post("/favorites/removefromfavorites", variable)
      .then((response) => {
        if (response.data.success) {
          getFavoriteSpots().catch(console.error);
        } else {
          alert("Failed to remove from favorites");
        }
      });
  };

  const renderTableBody = favoritedSpots.map((spot, index) => {
    return (
      <tr>
        <td>{spot.spotName}</td>
        <td>
          <img
            style={{ width: "200px" }}
            src={spot.spotImage}
            alt={spot.spotId}
          />
        </td>
        <td>
          <a href={spot.spotUrl}>{spot.spotUrl}</a>
        </td>
        <td>
          <button onClick={() => onClickRemove(spot.spotId)}>Remove</button>
        </td>
      </tr>
    );
  });

  return (
    <FavoritesContainer>
      <h3>My Favorite Spots</h3>
      <hr />
      <table>
        <thead>
          <tr>
            <th>Spot Name</th>
            <th>Photo</th>
            <th>web</th>
            <th>Remove</th>
          </tr>
        </thead>

        <tbody>{renderTableBody}</tbody>
      </table>
    </FavoritesContainer>
  );
}

export default FavoritePage;
