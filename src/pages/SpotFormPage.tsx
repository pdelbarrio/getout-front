import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import SpotForm, { SpotParams } from "../components/SpotForm";
import { SpotContext } from "../context/spot.context";
import { FormLayout } from "../ui/layouts/FormLayout";

const SpotFormPage = () => {
  const { createSpot } = useContext(SpotContext);
  const navigate = useNavigate();
  return (
    <FormLayout>
      <h2>Create your spot</h2>
      <SpotForm
        onSubmit={async (values: SpotParams) => {
          createSpot(values).then((status: boolean) => {
            if (status) {
              navigate("/categories");
            }
          });
        }}
      />
    </FormLayout>
  );
};

export default SpotFormPage;
