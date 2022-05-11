import React from "react";
import { useParams } from "react-router-dom";

const SpotsByCategory = () => {
  const { type } = useParams<{ type?: string }>();
  return (
    <div>
      <h1>SpotsByCategory</h1>
      {type}
    </div>
  );
};

export default SpotsByCategory;
