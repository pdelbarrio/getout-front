import { useMenuContext } from "../../state";
import { useTheme } from "../../hooks";
import Icon from "../Icon";
import { NavLink, NavLinksWrapper } from "../../ui/nav/NavLinks";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

// FIXME: Make and object with slug and name to map by link and show the string
export const links = ["new-spot", "categories"];

const DesktopNavLinks = () => {
  const { closeMenu } = useMenuContext();
  const { theme, toggleTheme } = useTheme();
  const { logout } = useContext(AuthContext);

  return (
    <NavLinksWrapper className="nav-links">
      {links.map((link) => (
        <li key={link}>
          <NavLink to={`/${link}`} className="link" onClick={closeMenu}>
            {link}
          </NavLink>
        </li>
      ))}
      <li>
        <button onClick={logout}>Logout</button>
      </li>
      <li>
        <button onClick={toggleTheme}>
          <Icon name={theme === "dark" ? "day" : "night"} />
        </button>
      </li>
    </NavLinksWrapper>
  );
};

export default DesktopNavLinks;
