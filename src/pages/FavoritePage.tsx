import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth.context";
import {
  ButtonContainer,
  FooterGap,
  RemoveButton,
  SpotsGroup,
  SpotsWrapper,
  StyledLinkGo,
} from "../ui/Spot";
import { motion } from "framer-motion";

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

  return (
    <SpotsWrapper>
      <div className="description">
        <h3 className="title">My Favorites</h3>
      </div>
      <SpotsGroup>
        {favoritedSpots.map((spot) => (
          <motion.div
            className="spotcard"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.1 }}
            key={spot.spotId}
          >
            <h4 className="spotname">{spot.spotName}</h4>

            <img src={spot.spotImage} alt={spot.spotName} />

            <ButtonContainer>
              <div>
                <RemoveButton onClick={() => onClickRemove(spot.spotId)}>
                  Remove
                </RemoveButton>
              </div>
              <div>
                <StyledLinkGo to={`/spot/${spot.spotId}`}>Go!</StyledLinkGo>
              </div>
            </ButtonContainer>
          </motion.div>
        ))}
      </SpotsGroup>
      <FooterGap></FooterGap>
    </SpotsWrapper>
  );
}

export default FavoritePage;
