import { useEffect } from "react";
// import { useMenuContext } from "../../state";
import { useMenuContext } from "../../context";
import { useScrollFreeze, useMedia } from "../../hooks";
import NavLinks from "./NavLinks";
import { MobileNav } from "../../ui/nav/MobileNav";

const MobileNavbar = () => {
  const { isMenuOpen, closeMenu } = useMenuContext();
  const { isMobile } = useMedia();
  useScrollFreeze(isMenuOpen);

  useEffect(() => {
    if (!isMobile) {
      closeMenu();
    }
  }, [isMobile]);

  return (
    <>
      {isMenuOpen && (
        <MobileNav>
          <NavLinks />
        </MobileNav>
      )}
    </>
  );
};

export default MobileNavbar;
