import { useContext, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Favorite from "../components/Favorite";
import { AuthContext } from "../context/auth.context";
import { SpotContext } from "../context/spot.context";
import { CatSpottLink, DistrictLink } from "../ui/Categories";
import { ButtonBack, FooterGap, SingleSpot, SpotContainer } from "../ui/Spot";

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
    <SpotContainer>
      {result.map((spot) => (
        <SingleSpot key={spot._id}>
          <h3>{spot.name}</h3>
          <img className="image" src={spot.image} alt={spot.name} />

          <Link className="addedby" to={`/addedby/${spot.uploader._id}`}>
            <div></div>
            <h4>
              added by{" "}
              {spot.uploader == null ? (
                <span className="name">Unknown user</span>
              ) : (
                <span className="name">@{spot.uploader.username}</span>
              )}
            </h4>
          </Link>

          <p>{spot.description}</p>
          <h4>url</h4>
          <a target="_blank" className="spoturl" href={spot.website}>
            {spot.website}
          </a>
          <div className="categorywrap">
            <div>
              <CatSpottLink to={`/spots/${spot.category}`}>
                {spot.category}
              </CatSpottLink>
            </div>
            <div>
              <DistrictLink to={`/district/${spot.district}`}>
                {spot.district}
              </DistrictLink>
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
      <FooterGap></FooterGap>
    </SpotContainer>
  );
};

export default SpotById;
