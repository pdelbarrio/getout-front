import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CATEGORIES } from "../constants/categories";
import { Button } from "../ui/Button";
import { Error } from "../ui/Error";
import { Form, Label } from "../ui/form/Form";
import { Input, Select, TextArea } from "../ui/form/Input";
import { requiredValidation } from "../utils/forms";
import SpotImageUpload from "./SpotImageUpload";

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
  const [imageOfSpot, setImageOfSpot] = useState<string>("");

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      description: "",
      image:
        "https://res.cloudinary.com/getoutbcn/image/upload/v1652182177/getout/samplespot_dhggsh.jpg",
      website: "",
      category: "",
      location: "",
    },
  });

  useEffect(() => {
    setValue("image", imageOfSpot);
    console.log(imageOfSpot);
  }, [imageOfSpot]);

  const updateImage = (imageUrl: string): void => {
    setImageOfSpot(imageUrl);
  };

  // We create onSubmit as props to make the father component (where <LoginForm/> is ) control the submit
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {imageOfSpot ? (
        <img src={imageOfSpot} alt="image of spot" />
      ) : (
        <Label>
          <SpotImageUpload updateImage={updateImage} />
          <input type="hidden" {...register("image")} />
        </Label>
      )}
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
          rows={10}
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
        <Select
          hasError={!!errors.category}
          {...register("category", requiredValidation)}
          defaultValue=""
        >
          <option value="">Category</option>
          {CATEGORIES.map((category) => (
            <option key={category.id} value={category.slug}>
              {category.name}
            </option>
          ))}
        </Select>

        {errors.category ? <Error>{errors.category.message}</Error> : null}
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
