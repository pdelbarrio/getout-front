import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Button } from "../ui/Button";

const Authenticate = () => {
  const { user, token, login } = useContext(AuthContext);

  //TODO: Handle form submit

  const handleRegister = () => {
    login({
      email: "test1@mail.com",
      password: "Hola1234$",
    });
  };

  console.log("Authenticate", { user, token });

  return (
    <div>
      <h1>Authenticate</h1>

      {/* TODO: Add register/login form */}
      <Button variant="white" onClick={handleRegister}>
        Register
      </Button>
      <Button variant="transparent" onClick={handleRegister}>
        Login
      </Button>
      <Button variant="transparent" disabled onClick={handleRegister}>
        Logout
      </Button>
    </div>
  );
};

export default Authenticate;
