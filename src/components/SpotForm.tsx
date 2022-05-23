import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { CATEGORIES } from "../constants/categories";
import { Button } from "../ui/Button";
import { Error } from "../ui/Error";
import { Form, Label } from "../ui/form/Form";
import { Input, Select, TextArea } from "../ui/form/Input";
import { requiredValidation } from "../utils/forms";
import axios from "axios";

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
  const [selectedFile, setSelectedFile] = useState(null);
  const [displayFile, setDisplayFile] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);

  const {
    handleSubmit,
    register,
    setValue,
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

  const onChange = (e: any) => {
    const { files } = e.target;
    setSelectedFile(files[0]);
    setDisplayFile(URL.createObjectURL(files[0]));
  };

  const onSubmitFile = async (file: any) => {
    console.log(file);
    //here, we are creatingng a new FormData object; this lets you compile a set of key/value pairs.
    var data = new FormData();
    // we are appending a new value onto an existing key inside a FormData object. the keys here are what is required for the upload by the cloudinary endpoint. the value in line 7 is your upload preset
    data.append("upload_preset", "spotspreset");
    data.append("file", file);
    try {
      //making a post request to the cloudinary endpoint
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/getoutbcn/image/upload`,
        data
      );
      console.log(response.data);
      //if a response is gotten, we set the selectedFile to null(this is also the original value while desclaring the state variable
      if (response.data) {
        setSelectedFile(null);
        // the API call returns a response that includes the URLs for accessing the uploaded file. here, when we have a response, we call setUploadedImage with a new value.
        setUploadedImage(response.data.secure_url);
        setValue("image", response.data.secure_url);
        setDisplayFile("");
      }
    } catch (e) {
      //logthe error if any here. you can as well display them to the users
      console.log(e.response);
      // set the state of loading to 0 if there is an error
    }
  };

  // We create onSubmit as props to make the father component (where <LoginForm/> is ) control the submit
  return (
    <>
      <div className="App">
        <div className="container">
          <div className="inputs">
            <input type="file" onChange={onChange} />
            <button onClick={() => onSubmitFile(selectedFile)}>Upload</button>
          </div>
          {displayFile ? (
            <img className="preview" alt="preview" src={displayFile} />
          ) : null}
        </div>

        {uploadedImage && (
          <img alt="preview" className="preview" src={uploadedImage} />
        )}
      </div>
      <Form method="post" onSubmit={handleSubmit(onSubmit)}>
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
          Preview spot
        </Button>
      </Form>
    </>
  );
};

export default SpotForm;
