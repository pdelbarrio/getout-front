import { useContext, useEffect, useState, useRef } from "react";
import { LoginParams, RegisterParams } from "../api/auth.api";
import Image from "../components/Image";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import { AuthContext } from "../context/auth.context";
import { Button } from "../ui/Button";
import {
  ButtonVideo,
  FormWrapper,
  LoginLayout,
  ToggleWrapper,
} from "../ui/layouts/LoginLayout";
import "./video.css";
import bgVideo from "../video/bgvideo.mp4";
import { useNavigate } from "react-router-dom";
import { setErrorToast } from "../utils/toasts";
import {
  ButtonContainer,
  ButtonInfoModal,
  ButtonModal,
  Container,
} from "../ui/Modal";
import Modal from "../components/Modal";

const Authenticate = () => {
  const [userEmail, setUserEmail] = useState("");
  const [formVariant, setFormVariant] = useState<"register" | "login">("login");
  const [videoswitch, setVideo] = useState(true);
  const [stateModal, setStateModal] = useState(true);
  const videoRef = useRef(null);
  const { login, register, authenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (authenticated) {
      navigate("/categories");
    }
  }, [authenticated]);

  const handleLogin = async (values: LoginParams) => {
    const errorPayload = await login(values);

    if (errorPayload) {
      setErrorToast(errorPayload.message);
    }
  };

  const handleVideo = () => {
    if (videoRef.current.paused) {
      setVideo(true);
      videoRef.current.play();
    } else {
      setVideo(false);
      videoRef.current.pause();
    }
  };

  const handleRegister = async (values: RegisterParams) => {
    const errorPayload = await register(values);

    if (errorPayload) {
      setErrorToast(errorPayload.message);
    } else {
      setUserEmail(values.email);
      setFormVariant("login");
    }
  };

  return (
    <LoginLayout className="video">
      <video ref={videoRef} autoPlay loop muted>
        <source src={bgVideo} type="video/mp4" />
      </video>

      <ButtonVideo onClick={handleVideo}>
        {videoswitch ? "pause" : "play"}
      </ButtonVideo>

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
          <RegisterForm onSubmit={handleRegister} />
        ) : (
          <LoginForm onSubmit={handleLogin} userEmail={userEmail} />
        )}
      </FormWrapper>

      <ButtonContainer>
        <ButtonInfoModal onClick={() => setStateModal(!stateModal)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-info-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
          </svg>
        </ButtonInfoModal>
      </ButtonContainer>

      <Modal stateModal={stateModal} setStateModal={setStateModal}>
        <Container>
          Welcome! GET OUT is a collaborative database of cool spots in
          Barcelona that don't appear in the typical guidebooks. It is divided
          into different categories so you can search. Feel free to create a
          user profile to add spots to your favorites and even to add spots to
          the database that you think may be interesting for other users. But
          above all GET OUT!
          <ButtonModal onClick={() => setStateModal(!stateModal)}>
            Accept
          </ButtonModal>
        </Container>
      </Modal>
    </LoginLayout>
  );
};

export default Authenticate;
