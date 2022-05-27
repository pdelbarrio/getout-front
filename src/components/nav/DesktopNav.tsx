import { Link } from "react-router-dom";
// import { useMenuContext } from "../../state";
import { useMenuContext } from "../../context";
import Hamburger from "hamburger-react";
import NavLinks from "./NavLinks";
import { useScroll } from "../../hooks";
import { DesktopNav } from "../../ui/nav/DesktopNav";

const DesktopNavbar = () => {
  const { isMenuOpen, toggleMenu } = useMenuContext();
  const { isScrolled } = useScroll();
  return (
    <DesktopNav isScrolled={isScrolled}>
      <Link to="/categories">
        <img className="logo" src="/textlogosmall.png" alt="logo getout" />
      </Link>
      <NavLinks />
      <Hamburger toggled={isMenuOpen} toggle={toggleMenu} duration={0} />
    </DesktopNav>
  );
};

export default DesktopNavbar;
