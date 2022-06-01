import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const SpotsWrapper = styled.div`
  padding-left: 30px;
  padding-top: 20px;

  .description {
    gap: var(--padding-m);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
    padding-bottom: 50px;

    .title {
      font-size: 40px;
    }
  }
`;

export const SpotsGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--padding-s);
  justify-content: center;
`;

export const Spot = styled.div`
  /* background-color: var(--green); */
  color: var(--text);
  padding: var(--padding-s);
  border: 2px solid;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: var(--padding-s);
  max-width: 300px;
  width: 100%;

  .spotname {
    font-weight: bolder;
    font-size: 1.5em;
  }

  .button {
    display: flex;
    justify-content: space-between;
  }
`;
export const RemoveButton = styled.button`
  text-decoration: none;
  /* mix-blend-mode: multiply; */
  background-color: transparent;
  color: var(--text);
  padding: var(--padding-xs);
  border: 2px solid;
  border-radius: 10px;
  max-width: 100px;

  &:hover {
    color: var(--text);
    mix-blend-mode: color-burn;
  }
  &:focus {
    color: var(--text);
    mix-blend-mode: color-dodge;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const StyledLinkGo = styled(Link)`
  text-decoration: none;
  /* mix-blend-mode: multiply; */
  color: var(--text);
  padding: var(--padding-xs);
  border: 2px solid;
  border-radius: 10px;
  max-width: 100px;

  &:hover {
    color: var(--text);
    mix-blend-mode: color-burn;
  }
  &:focus {
    color: var(--text);
    mix-blend-mode: color-dodge;
  }
`;

export const StyledLinkBack = styled(Link)`
  text-decoration: none;
  color: var(--text);
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
  .image {
    border: solid 1px;
  }
  .wrapbuttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .name {
    font-weight: bold;
    font-size: 20px;
    font-style: italic;
  }
  .addedby {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .categorywrap {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 2em;
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

export const ButtonBack = styled.button`
  text-decoration: none;
  /* mix-blend-mode: multiply; */
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

export const FooterGap = styled.div`
  //
  height: 50px;
`;
