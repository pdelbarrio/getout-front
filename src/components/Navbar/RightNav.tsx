import { useContext } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import { Ul } from "../../ui/Navbar";

//TODO: TRY NAVLINK FROM REACT-ROUTER-DOM INSTEAD OF <Link /> (OR CREATE LINK WITH STYLED COMPONENT)

export type Props = {
  open: boolean;
};

const RightNav = ({ open }: Props) => {
  const { logout } = useContext(AuthContext);

  return (
    <Ul open={open}>
      <li>
        <Link to="/about-us">About Us</Link>
      </li>
      <li>
        <Link to="/profile">My Profile</Link>
      </li>
      <li>
        <Link to="/categories">Categories</Link>
      </li>
      <li>
        <Link to="/new-spot">New Spot</Link>
      </li>
      <li>
        <Button onClick={logout} variant="white">
          Logout
        </Button>
      </li>
    </Ul>
  );
};

export default RightNav;
