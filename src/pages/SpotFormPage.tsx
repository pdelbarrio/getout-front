import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import SpotForm, { SpotParams } from "../components/SpotForm";
import { SpotContext } from "../context/spot.context";

const SpotFormPage = () => {
  const { createSpot } = useContext(SpotContext);
  const navigate = useNavigate();
  return (
    <div>
      <h1>Create your spot</h1>
      <SpotForm
        onSubmit={async (values: SpotParams) => {
          createSpot(values).then((status: boolean) => {
            if (status) {
              navigate("/categories");
            }
          });
        }}
      />
    </div>
  );
};

export default SpotFormPage;
