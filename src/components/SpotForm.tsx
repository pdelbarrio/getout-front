import { useForm } from "react-hook-form";
import { Button } from "../ui/Button";
import { Error } from "../ui/Error";
import { Form, Label } from "../ui/form/Form";
import { Input, TextArea } from "../ui/form/Input";
import { requiredValidation } from "../utils/forms";

export type SpotParams = {
  name: string;
  description: string;
  image: string;
  website: string;
  category: string;
  location: string;
};

export type Props = {
  onSubmit: (values: SpotParams) => Promise<void>;
};

const SpotForm = ({ onSubmit }: Props) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      description: "",
      image: "",
      website: "",
      category: "",
      location: "",
    },
  });

  // We create onSubmit as props to make the father component (where <LoginForm/> is ) control the submit
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label>
        <Input
          hasError={!!errors.name}
          placeholder="name of the spot"
          type="text"
          {...register("name", requiredValidation)}
        />

        {errors.name ? <Error>{errors.name.message}</Error> : null}
      </Label>

      <Label>
        <TextArea
          hasError={!!errors.description}
          placeholder="description of the spot"
          {...register("description", requiredValidation)}
        />

        {errors.description ? (
          <Error>{errors.description.message}</Error>
        ) : null}
      </Label>

      <Label>
        <Input
          hasError={!!errors.website}
          placeholder="website"
          type="text"
          {...register("website")}
        />

        {errors.website ? <Error>{errors.website.message}</Error> : null}
      </Label>

      <Label>
        <Input
          hasError={!!errors.location}
          placeholder="location of the spot"
          type="text"
          {...register("location", requiredValidation)}
        />

        {errors.location ? <Error>{errors.location.message}</Error> : null}
      </Label>
      <Button variant="white" type="submit">
        Submit spot
      </Button>
    </Form>
  );
};

export default SpotForm;
