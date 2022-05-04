import { css } from "@emotion/react";
import styled from "@emotion/styled";

const whiteBg = css`
  mix-blend-mode: normal;
`;

const transparentBg = css`
  mix-blend-mode: darken;
`;

export type ButtonVariants = "white" | "transparent";

export const Button = styled.button<{ variant: ButtonVariants }>`
  ${(props) => (props.variant === "white" ? whiteBg : transparentBg)}
  border: 1px solid #000;
  border-radius: 50px;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  font-family: inherit;
  font-weight: bold;
  font-size: 1.25rem;
  line-height: 1.5;
  padding: 5px 7px;
  text-decoration: none;
  text-overflow: ellipsis;
  transition: all 0.14s ease-out;
  margin: 5px;

  &:hover {
    box-shadow: 4px 4px 0 #000;
    transform: translate(-4px, -4px);
    color: black;
  }
  &:focus-visible {
    outline-offset: 1px;
    color: black;
  }
  &:visited {
    color: black;
  }
  &:link {
    color: black;
  }

  &:disabled {
    /* pointer-events: none; */
    background-color: grey;
  }
`;
