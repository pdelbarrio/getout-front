import React, { useContext } from "react";
import SpotForm, { SpotParams } from "../components/SpotForm";
import { SpotContext } from "../context/spot.context";

const SpotFormPage = () => {
  const { createSpot } = useContext(SpotContext);
  return (
    <div>
      <h1>Create your spot</h1>
      <SpotForm
        onSubmit={async (values: SpotParams) => {
          console.log(values);
          console.log("Submitting Spot");
          createSpot(values).then((status: boolean) => {
            console.log("Callback", status);
          });
        }}
      />
    </div>
  );
};

export default SpotFormPage;
