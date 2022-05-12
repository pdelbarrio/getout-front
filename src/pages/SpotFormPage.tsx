import React from "react";
import SpotForm, { SpotParams } from "../components/SpotForm";

const SpotFormPage = () => {
  return (
    <div>
      <h1>Create your spot</h1>
      <SpotForm
        onSubmit={async (values: SpotParams) => {
          console.log(values);
          console.log("Submitting Spot");
        }}
      />
    </div>
  );
};

export default SpotFormPage;
