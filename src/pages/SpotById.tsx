import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { spots } from "../mocks/spots";
import { Spot } from "../ui/Spot";
import { Tag } from "../ui/Tag";
import backButton from "../../public/goback.png";
import "./spotbyid.css";

const SpotById = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const result = spots.filter(({ _id: v }) => v == id);

  console.log(id);
  console.log(result);

  const handleClick = (e: any) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <div>
      {result.map((spot) => (
        <Spot>
          <h3>{spot.name}</h3>
          <img src={spot.images} alt={spot.name} />
          <h3>
            added by <span>@{spot.uploader.username}</span>
          </h3>
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
        </Spot>
      ))}
    </div>
  );
};

export default SpotById;
