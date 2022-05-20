import { useContext } from "react";
import { Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import { ButtonLogout, StyledNavLink, Ul } from "../../ui/Navbar";

//TODO: TRY NAVLINK FROM REACT-ROUTER-DOM INSTEAD OF <Link /> (OR CREATE LINK WITH STYLED COMPONENT)

export type Props = {
  open: boolean;
};

const RightNav = ({ open }: Props) => {
  const { logout } = useContext(AuthContext);

  return (
    <Ul open={open}>
      <li>
        <StyledNavLink to="/about-us">About Us</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/profile">My Profile</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/categories">Categories</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/new-spot">New Spot</StyledNavLink>
      </li>
      <li>
        <ButtonLogout onClick={logout}>Logout</ButtonLogout>
      </li>
    </Ul>
  );
};

export default RightNav;
