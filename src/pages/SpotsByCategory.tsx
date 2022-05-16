import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { CATEGORIES } from "../constants/categories";
import { SpotContext } from "../context/spot.context";
import { Spot, SpotsGroup } from "../ui/Spot";
import goButton from "/go.png";

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

  return (
    <div>
      <Link to={"/categories"}>
        <p>back</p>
      </Link>
      <h2>{nameOfCategory}</h2>
      <p>{description}</p>
      <SpotsGroup>
        {result.map((spot) => (
          <Spot key={spot._id}>
            <h3>{spot.name}</h3>
            <img src={spot.image} alt={spot.name} />
            <Link to={`/spot/${spot._id}`}>
              <img className="go" src={goButton} alt="go" />
            </Link>
          </Spot>
        ))}
      </SpotsGroup>
    </div>
  );
};

export default SpotsByCategory;
