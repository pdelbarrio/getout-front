import { Link, useParams } from "react-router-dom";
import { spots } from "../mocks/spots";
import { Spot } from "../ui/Spot";

const SpotsByCategory = () => {
  const { type } = useParams<{ type?: string }>();

  const result = spots.filter(({ category: v }) => v == type);

  console.log(spots);
  console.log(result);

  return (
    <div>
      <h3>SpotsByCategory</h3>
      {type}
      <div>
        {result.map((spot) => (
          <Spot>
            <Link to={`/spot/${spot._id}`}>
              <h3>{spot.name}</h3>
              <img src={spot.images} alt={spot.name} />
            </Link>
          </Spot>
        ))}
      </div>
    </div>
  );
};

export default SpotsByCategory;
