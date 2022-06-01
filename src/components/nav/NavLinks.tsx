import { useMenuContext } from "../../context";
import { useTheme } from "../../hooks";
import Icon from "../Icon";
import { LogoutButton, NavLink, NavLinksWrapper } from "../../ui/nav/NavLinks";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

export const links = [
  {
    id: 1,
    slug: "contact",
    name: "Contact",
  },
  {
    id: 2,
    slug: "new-spot",
    name: "New Spot",
  },
  {
    id: 3,
    slug: "categories",
    name: "Categories",
  },
  {
    id: 4,
    slug: "favorites",
    name: "Favorites",
  },
];

const DesktopNavLinks = () => {
  const { closeMenu } = useMenuContext();
  const { theme, toggleTheme } = useTheme();
  const { logout } = useContext(AuthContext);

  return (
    <NavLinksWrapper className="nav-links">
      {links.map((link) => (
        <li key={link.id}>
          <NavLink to={`/${link.slug}`} className="link" onClick={closeMenu}>
            {link.name}
          </NavLink>
        </li>
      ))}
      <li>
        <LogoutButton onClick={logout}>Logout</LogoutButton>
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
