import styled from "@emotion/styled";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const { authenticated } = useContext(AuthContext);
  return authenticated ? (
    <Nav>
      <DesktopNav />
      <MobileNav />
    </Nav>
  ) : null;
};

export default Navbar;

const Nav = styled.div`
  padding-top: 65px;
  display: flex;
  flex-flow: column nowrap;
`;
