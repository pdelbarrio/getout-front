import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Favorite from "../components/Favorite";
import { AuthContext } from "../context/auth.context";
import { SpotContext } from "../context/spot.context";
import { CategoryLink } from "../ui/Categories";
import { ButtonBack, SingleSpot } from "../ui/Spot";
import { Tag } from "../ui/Tag";

const SpotById = () => {
  const { getSpots, spots } = useContext(SpotContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getSpots();
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
          <div className="addedby">
            <div></div>
            <h4>
              added by{" "}
              {spot.uploader == null ? (
                <span className="name">Unknown user</span>
              ) : (
                <span className="name">@{spot.uploader.username}</span>
              )}
            </h4>
          </div>
          <p>{spot.description}</p>
          <h4>url</h4>
          <a target="_blank" href={spot.website}>
            {spot.website}
          </a>
          <div className="categorywrap">
            <div>
              <h4>category</h4>
              <Tag>{spot.category}</Tag>
            </div>
            <div>
              <h4>district</h4>
              <CategoryLink to={`/district/${spot.district}`}>
                <Tag>{spot.district}</Tag>
              </CategoryLink>
            </div>
          </div>
          <h4>location</h4>

          <p>{spot.location}</p>
          <div className="wrapbuttons">
            <ButtonBack onClick={handleClick}>back</ButtonBack>
            <Favorite
              userFrom={user?._id}
              spotId={spot._id}
              spotName={spot.name}
              spotImage={spot.image}
              spotUrl={spot.website}
            />
          </div>
        </SingleSpot>
      ))}
    </div>
  );
};

export default SpotById;
