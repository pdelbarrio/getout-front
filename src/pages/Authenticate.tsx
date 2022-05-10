import { useContext, useEffect, useState } from "react";
import { LoginParams, RegisterParams } from "../api/auth.api";
import Image from "../components/Image";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import { AuthContext } from "../context/auth.context";
import { Button } from "../ui/Button";
import {
  ErrorWrapper,
  FormWrapper,
  LoginLayout,
  ToggleWrapper,
} from "../ui/layouts/LoginLayout";
import "./video.css";
import bgVideo from "../video/bgvideo.mp4";
import { Error } from "../ui/Error";
import { useNavigate } from "react-router-dom";

const Authenticate = () => {
  const [userEmail, setUserEmail] = useState("");
  const [formVariant, setFormVariant] = useState<"register" | "login">("login");
  const [formError, setFormError] = useState<string | null>(null);
  const { user, login, register } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/styleguide");
    }
  }, [user]);

  const handleLogin = async (values: LoginParams) => {
    const errorPayload = await login(values);

    if (errorPayload) {
      setFormError(errorPayload.message);
    }
  };

  const handleRegister = async (values: RegisterParams) => {
    const errorPayload = await register(values);

    if (errorPayload) {
      setFormError(errorPayload.message);
    } else {
      setUserEmail(values.email);
      setFormVariant("login");
    }
  };

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

        {formError ? (
          <ErrorWrapper>
            <Error>{formError}</Error>
          </ErrorWrapper>
        ) : null}

        {formVariant === "register" ? (
          <RegisterForm onSubmit={handleRegister} />
        ) : (
          <LoginForm onSubmit={handleLogin} userEmail={userEmail} />
        )}
      </FormWrapper>
    </LoginLayout>
  );
};

export default Authenticate;
