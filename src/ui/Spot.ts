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

  .spotcard {
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
  }
`;

// export const Spot = styled.div`
//   /* background-color: var(--green); */
//   color: var(--text);
//   padding: var(--padding-s);
//   border: 2px solid;
//   border-radius: 10px;

//   display: flex;
//   flex-direction: column;
//   justify-content: center;

//   gap: var(--padding-s);
//   max-width: 300px;
//   width: 100%;

//   .spotname {
//     font-weight: bolder;
//     font-size: 1.5em;
//   }

//   .button {
//     display: flex;
//     justify-content: space-between;
//   }
// `;
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
    position: relative;
    color: white;
    text-decoration: none;
    color: var(--dark);
    &::before {
      content: "";
      display: block;
      position: absolute;
      left: 0;
      bottom: -2px;
      height: 2px;
      width: 0;
      background: var(--dark);
      transition: width 150ms linear;
    }
    &:hover::before {
      width: 100%;
    }
    .smiley > svg {
      transform: rotateX(180deg);
    }
  }
`;

export const ButtonBack = styled.button`
  text-decoration: none;
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
