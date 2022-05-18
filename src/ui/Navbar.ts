import styled from "@emotion/styled";
import { tabletDown } from "./breakpoints";

export const NavbarWrapper = styled.header`
  background-color: var(--white);
  width: 100%;
  padding: var(--padding-m) var(--padding-s);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Ul = styled.ul<{ open: boolean }>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  ${tabletDown} {
    flex-flow: column nowrap;
    background-color: var(--violet);
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    width: ${({ open }) => (open ? "300px" : "0")};

    padding-left: 0;

    li {
      color: #fff;
    }
  }
`;

export const StyledBurger = styled.div<{ open: boolean }>`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;

  ${tabletDown} {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#ccc" : "#333")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-of-type(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-of-type(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-of-type(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
