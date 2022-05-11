import React from "react";
import { useParams } from "react-router-dom";
import { spots } from "../mocks/spots";
import { Spot } from "../ui/Spot";
import { Tag } from "../ui/Tag";

const SpotById = () => {
  const { id } = useParams();

  const result = spots.filter(({ _id: v }) => v == id);

  console.log(id);
  console.log(result);

  return (
    <div>
      {result.map((spot) => (
        <Spot>
          <h3>Name: {spot.name}</h3>
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
        </Spot>
      ))}
    </div>
  );
};

export default SpotById;
