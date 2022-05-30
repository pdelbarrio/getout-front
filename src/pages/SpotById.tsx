import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Favorite from "../components/Favorite";
import { AuthContext } from "../context/auth.context";
import { SpotContext } from "../context/spot.context";
import { ButtonBack, SingleSpot } from "../ui/Spot";
import { Tag } from "../ui/Tag";

const SpotById = () => {
  const { getSpots, spots } = useContext(SpotContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getSpots();
    console.log(user._id);
  }, []);

  const result = spots.filter(({ _id: v }) => v == id);

  const handleClick = (e: any) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <div>
      {result.map((spot) => (
        <SingleSpot key={spot._id}>
          <h3>{spot.name}</h3>
          <img src={spot.image} alt={spot.name} />

          <Favorite
            userFrom={user?._id}
            spotId={spot._id}
            spotName={spot.name}
            spotImage={spot.image}
          />

          <h4>
            added by{" "}
            {spot.uploader == null ? (
              <span>Unknown user</span>
            ) : (
              <span>@{spot.uploader.username}</span>
            )}
          </h4>
          <p>{spot.description}</p>
          <h4>url</h4>
          <a target="_blank" href={spot.website}>
            {spot.website}
          </a>
          <h4>category</h4>
          <Tag>{spot.category}</Tag>
          <h4>location</h4>
          <p>{spot.location}</p>

          <ButtonBack onClick={handleClick}>back</ButtonBack>
        </SingleSpot>
      ))}
    </div>
  );
};

export default SpotById;
