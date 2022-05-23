import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import SpotForm, { SpotParams } from "../components/SpotForm";
import { SpotContext } from "../context/spot.context";
import { FormLayout } from "../ui/layouts/FormLayout";
import { setErrorToast, setSuccessToast } from "../utils/toasts";

const SpotFormPage = () => {
  const { createSpot } = useContext(SpotContext);
  const navigate = useNavigate();

  const submitNewSpot = async (values: SpotParams) => {
    createSpot(values).then((status: boolean) => {
      console.log("values", values);
      console.log("status", status);
      if (status) {
        setSuccessToast(
          "Your spot is pending moderation, it will appear soon, THANKS!"
        );
        navigate("/categories");
      } else {
        setErrorToast("Error creating spot");
      }
    });
  };

  return (
    <FormLayout>
      <h3>Create your spot</h3>

      <SpotForm onSubmit={submitNewSpot} />
    </FormLayout>
  );
};

export default SpotFormPage;
