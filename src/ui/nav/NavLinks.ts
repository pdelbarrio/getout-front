import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavLinksWrapper = styled.ul`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;

  li:not(:last-child) {
    margin-left: auto;
  }

  li:last-child {
    margin-left: auto;
  }

  button {
    background: transparent;
    outline: none;
    border: none;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    li {
      padding: 12px;
      margin: 0 !important;
    }
  }
`;

export const LogoutButton = styled.button`
  color: var(--text);
`;

export const NavLink = styled(Link)`
  position: relative;
  color: white;
  text-decoration: none;
  text-transform: capitalize;
  color: var(--text);
  &::before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: -2px;
    height: 2px;
    width: 0;
    background: var(--text);
    transition: width 150ms linear;
  }
  &:hover::before {
    width: 100%;
  }
`;
