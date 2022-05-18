import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const SpotsWrapper = styled.div`
  gap: var(--padding-s);
  padding-left: 30px;

  > h3 {
    margin: 30px;
  }

  > p {
    margin: 30px;
  }
`;

export const SpotsGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--padding-xs);
  justify-content: center;
`;

export const Spot = styled.div`
  background-color: var(--green);
  color: var(--dark);
  padding: var(--padding-s);
  border: 2px solid;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: var(--padding-s);
  max-width: 300px;
  width: 100%;

  .button {
    display: flex;
    justify-content: space-between;
  }
`;

export const StyledLinkGo = styled(Link)`
  text-decoration: none;
  background-color: var(--green);
  color: var(--dark);
  padding: var(--padding-xs);
  border: 2px solid;
  border-radius: 10px;
  max-width: 100px;

  &:hover {
    mix-blend-mode: color-burn;
  }
  &:focus {
    mix-blend-mode: color-dodge;
  }
`;

export const StyledLinkBack = styled(Link)`
  text-decoration: none;
  color: var(--dark);
  padding: var(--padding-xs);
  border: 2px solid;
  border-radius: 10px;
  max-width: 100px;

  &:hover {
    background-color: var(--yellow);
  }
  &:focus {
    background-color: var(--error);
  }
`;

export const SingleSpot = styled.div`
  background-color: var(--yellow);
  color: var(--dark);
  padding: var(--padding-s);
  border: 2px solid;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  gap: var(--padding-s);
  max-width: 700px;
  margin: 0 auto;

  > a {
    box-shadow: inset 0 0 0 0 var(--dark);
    color: var(--dark);
    margin: 0 -0.25rem;
    padding: 0 0.25rem;
    transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  }
  a:hover {
    box-shadow: inset 15vw 0 0 0 var(--dark);
    color: white;
  }
`;

export const ButtonBack = styled.button`
  text-decoration: none;
  mix-blend-mode: multiply;
  color: var(--dark);
  padding: var(--padding-xs);
  border: 2px solid;
  border-radius: 10px;
  max-width: 100px;

  &:hover {
    mix-blend-mode: color-burn;
  }
  &:focus {
    mix-blend-mode: color-dodge;
  }
`;
