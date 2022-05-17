import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Button } from "../ui/Button";
import { NavbarWrapper } from "../ui/Navbar";
import Image from "./Image";

const Navbar = () => {
  const { authenticated, logout } = useContext(AuthContext);

  return authenticated ? (
    <NavbarWrapper>
      <Image size="s" src="/getoutlogo.png" alt="logo getout" />

      <Button onClick={logout} variant="white">
        Logout
      </Button>
    </NavbarWrapper>
  ) : null;
};

export default Navbar;
