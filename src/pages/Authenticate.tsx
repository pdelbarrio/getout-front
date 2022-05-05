import { useContext, useState } from "react";
import { LoginParams } from "../api/auth.api";
import Image from "../components/Image";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import { AuthContext } from "../context/auth.context";
import { Button } from "../ui/Button";
import {
  FormWrapper,
  LoginLayout,
  ToggleWrapper,
} from "../ui/layouts/LoginLayout";
import bgVideo from "../video/bgtest.mp4";
import "./video.css";

const Authenticate = () => {
  const [formVariant, setFormVariant] = useState<"register" | "login">("login");
  const { user, token, login } = useContext(AuthContext);

  //TODO: Handle form submit

  const handleLogin = (values: LoginParams) => {
    login(values);
  };

  console.log("Authenticate", { user, token });

  return (
    <LoginLayout className="video">
      {/* <video autoPlay loop muted>
        <source src={bgVideo} type="video/mp4" />
      </video> */}
      <Image src="/getoutlogo.png" alt="logo-getout" />

      <FormWrapper>
        <ToggleWrapper>
          <Button
            onClick={() => setFormVariant("register")}
            variant={formVariant === "register" ? "white" : "transparent"}
          >
            Register
          </Button>
          <Button
            onClick={() => setFormVariant("login")}
            variant={formVariant === "login" ? "white" : "transparent"}
          >
            Login
          </Button>
        </ToggleWrapper>
        {formVariant === "register" ? (
          <RegisterForm onSubmit={() => null} />
        ) : (
          <LoginForm onSubmit={() => null} />
        )}
      </FormWrapper>
    </LoginLayout>
  );
};

export default Authenticate;
