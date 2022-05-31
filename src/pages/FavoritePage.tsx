import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth.context";
import { FavoritesContainer } from "../ui/FavoritesContainer";

//FALTA TIPAR TODO:

export type FavoriteSpots = {
  spotID: string;
  spotName: string;
  spotImage: string;
  spotUrl: string;
};

function FavoritePage() {
  const [favoritedSpots, setFavoritedSpots] = useState<FavoriteSpots[]>([]);
  const { user } = useContext(AuthContext);

  const variable = { userFrom: user?._id };

  useEffect(() => {
    const authAxios = axios.create({
      baseURL: import.meta.env.VITE_API_BASE_URL as string,
      withCredentials: true,
    });

    const getFavoriteSpots = async () => {
      console.log(variable);
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
    getFavoriteSpots().catch(console.error);
    //
  }, []);

  const renderTableBody = favoritedSpots.map((spot, index) => {
    return (
      <tr>
        <td>{spot.spotName}</td>
        <td>
          <img
            style={{ width: "100px" }}
            src={spot.spotImage}
            alt={spot.spotID}
          />
        </td>
        <td>
          <a href={spot.spotUrl}>{spot.spotUrl}</a>
        </td>
        <td>Remove</td>
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
