import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import SpotForm, { SpotParams } from "../components/SpotForm";
import { SpotContext } from "../context/spot.context";
import { FormLayout } from "../ui/layouts/FormLayout";

const SpotFormPage = () => {
  const { createSpot } = useContext(SpotContext);
  const navigate = useNavigate();

  const submitNewSpot = async (values: SpotParams) => {
    createSpot(values).then((status: boolean) => {
      console.log(status);
      if (status) {
        navigate("/categories");
      }
    });
  };

  return (
    <FormLayout>
      <h2>Create your spot</h2>

      <SpotForm onSubmit={submitNewSpot} />
    </FormLayout>
  );
};

export default SpotFormPage;
