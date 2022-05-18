import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { CATEGORIES } from "../constants/categories";
import { SpotContext } from "../context/spot.context";
import { Spot, SpotsGroup, SpotsWrapper, StyledLink } from "../ui/Spot";

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
      <div>
        <StyledLink to={"/categories"}>back</StyledLink>
      </div>
      <h2>{nameOfCategory}</h2>
      <p>{description}</p>
      <SpotsGroup>
        {result.map((spot) => (
          <Spot key={spot._id}>
            <h3>{spot.name}</h3>
            {spot.image == "" ? (
              <img src={defaultImage} alt={spot.name} />
            ) : (
              <img src={spot.image} alt={spot.name} />
            )}

            <StyledLink to={`/spot/${spot._id}`}>Go!</StyledLink>
          </Spot>
        ))}
      </SpotsGroup>
    </SpotsWrapper>
  );
};

export default SpotsByCategory;
