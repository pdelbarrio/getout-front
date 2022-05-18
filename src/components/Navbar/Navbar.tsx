import { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../context/auth.context";

import { NavbarWrapper } from "../../ui/Navbar";
import Image from "../Image";
import Burger from "./Burguer";

const Navbar = () => {
  const { authenticated } = useContext(AuthContext);

  return authenticated ? (
    <NavbarWrapper>
      <Link to="/categories">
        <img src="/logotextsmall.png" alt="logo getout" />
      </Link>

      <Burger />
    </NavbarWrapper>
  ) : null;
};

export default Navbar;
