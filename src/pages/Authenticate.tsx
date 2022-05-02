import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

const Authenticate = () => {
  const { register } = useContext(AuthContext);

  //TODO: Handle form submit

  const handleRegister = () => {
    register({
      username: "GetOutUser",
      email: "pablo@mail.lol",
      password: "Hola1234$",
    });
  };

  return (
    <div>
      <h1>Authenticate</h1>

      {/* TODO: Add register/login form */}
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Authenticate;
