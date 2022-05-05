import { useForm } from "react-hook-form";
import { LoginParams } from "../api/auth.api";
import { Button } from "../ui/Button";
import { Error } from "../ui/Error";
import { Form, Label } from "../ui/form/Form";
import { Input } from "../ui/form/Input";
import { emailValidation, passwordValidation } from "../utils/forms";

export type Props = {
  onSubmit: (values: LoginParams) => Promise<void>;
};

const LoginForm = ({ onSubmit }: Props) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // We create onSubmit as props to make the father component (where <LoginForm/> is ) control the submit
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label>
        <Input
          hasError={!!errors.email}
          placeholder="email"
          type="email"
          {...register("email", emailValidation)}
        />

        {errors.email ? <Error>{errors.email.message}</Error> : null}
      </Label>

      <Label>
        <Input
          hasError={!!errors.password}
          placeholder="password"
          type="password"
          {...register("password", passwordValidation)}
        />

        {errors.password ? <Error>{errors.password.message}</Error> : null}
      </Label>

      <Button variant="white" type="submit">
        Login
      </Button>
    </Form>
  );
};

export default LoginForm;
