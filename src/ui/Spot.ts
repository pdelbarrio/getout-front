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
    /* width: 100%; */

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

export const RemoveButton = styled.button`
  text-decoration: none;
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
export const SpotContainer = styled.div`
  /* width: 100%; */
  margin-left: 5px;
  margin-right: 5px;
  /* resize: both; */
`;
export const SingleSpot = styled.div`
  margin-left: 5px;
  margin-right: 5px;
  background-color: var(--yellow);
  color: var(--dark);
  /* padding: var(--padding-s); */
  border: 2px solid;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  gap: var(--padding-s);

  margin: 0 auto;
  overflow: hidden;
  resize: both;
  .image {
    max-width: 400px;
    border: solid 1px;
    overflow: hidden;
    resize: both;
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

  .spoturl {
    max-width: 400px;
    overflow-wrap: break-word;
    word-wrap: break-word;
    hyphens: auto;
    word-break: break-word;
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
  height: 50px;
`;
