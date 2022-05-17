import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../../context/auth.context";
import { Button } from "../../ui/Button";
import { NavbarWrapper } from "../../ui/Navbar";
import Image from "../Image";
import Burger from "./Burguer";

const Navbar = () => {
  const { authenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleNewSpot = () => {
    navigate("new-spot");
  };

  return authenticated ? (
    <NavbarWrapper>
      <Link to="/categories">
        <Image size="m" src="/logotextsmall.png" alt="logo getout" />
      </Link>

      <Burger />
    </NavbarWrapper>
  ) : null;
};

export default Navbar;
