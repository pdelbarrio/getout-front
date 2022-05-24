import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { CATEGORIES } from "../constants/categories";
import { SpotContext } from "../context/spot.context";
import {
  Spot,
  SpotsGroup,
  SpotsWrapper,
  StyledLinkBack,
  StyledLinkGo,
} from "../ui/Spot";

const SpotsByCategory = () => {
  const { getSpots, spots } = useContext(SpotContext);
  const { type } = useParams<{ type?: string }>();

  useEffect(() => {
    getSpots();
  }, []);

  const result = spots.filter(({ category: v }) => v == type);
  const description = CATEGORIES.filter((item) => item.slug == type).map(
    (item) => item.description
  );

  const nameOfCategory = CATEGORIES.filter((item) => item.slug == type).map(
    (item) => item.name
  );

  const defaultImage =
    "https://res.cloudinary.com/getoutbcn/image/upload/v1652182177/getout/samplespot_dhggsh.jpg";

  return (
    <SpotsWrapper>
      <StyledLinkBack to={"/categories"}>back</StyledLinkBack>

      <h3>{nameOfCategory}</h3>
      <p>{description}</p>
      <SpotsGroup>
        {result.map((spot) => (
          <Spot key={spot._id}>
            <h4>{spot.name}</h4>
            {spot.image == "" ? (
              <img src={defaultImage} alt={spot.name} />
            ) : (
              <img src={spot.image} alt={spot.name} />
            )}

            <div className="button">
              <div></div>
              <div>
                <StyledLinkGo to={`/spot/${spot._id}`}>Go!</StyledLinkGo>
              </div>
            </div>
          </Spot>
        ))}
      </SpotsGroup>
    </SpotsWrapper>
  );
};

export default SpotsByCategory;
