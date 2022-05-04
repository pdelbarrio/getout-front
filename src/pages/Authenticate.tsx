import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

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
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Authenticate;
