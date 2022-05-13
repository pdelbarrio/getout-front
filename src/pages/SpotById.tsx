import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SpotContext } from "../context/spot.context";
import { SingleSpot } from "../ui/Spot";
import { Tag } from "../ui/Tag";
import backButton from "/goback.png";

const SpotById = () => {
  const { getSpots, spots } = useContext(SpotContext);
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
          <img src={spot.images} alt={spot.name} />
          <h4>
            added by <span>@{spot.uploader.username}</span>
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

          <a href="#" onClick={handleClick}>
            <img className="back" src={backButton} alt="back button" />
          </a>
        </SingleSpot>
      ))}
    </div>
  );
};

export default SpotById;
