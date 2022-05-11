import { Link, useParams } from "react-router-dom";
import { spots } from "../mocks/spots";
import { Spot, SpotsGroup } from "../ui/Spot";
import goButton from "/go.png";

const SpotsByCategory = () => {
  const { type } = useParams<{ type?: string }>();

  const result = spots.filter(({ category: v }) => v == type);

  return (
    <div>
      <h3>SpotsByCategory</h3>
      {type}
      <p>Description of category??</p>
      <SpotsGroup>
        {result.map((spot) => (
          <Spot key={spot._id}>
            <h3>{spot.name}</h3>
            <img src={spot.images} alt={spot.name} />
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
