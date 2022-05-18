import styled from "@emotion/styled";
import { Link } from "react-router-dom";

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

  .go {
    width: 7vw;
  }

  > a {
    box-shadow: inset 0 0 0 0 var(--dark);
    color: var(--dark);
    margin: 0 -0.25rem;
    padding: 0 0.25rem;
    transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  }
  a:hover {
    box-shadow: inset 10vw 0 0 0 var(--dark);
    color: white;
  }
`;

export const SpotsWrapper = styled.div`
  gap: var(--padding-s);
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  background-color: var(--green);
  color: var(--dark);
  padding: var(--padding-s);
  border: 2px solid;
  border-radius: 10px;
  max-width: 100px;

  &:hover {
    background-color: var(--lightgreen);
  }
  &:focus {
    border: 2px solid;
    background-color: var(--green);
  }
`;

export const SpotsGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--padding-xs);
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

  .back {
    width: 5vw;
  }

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
