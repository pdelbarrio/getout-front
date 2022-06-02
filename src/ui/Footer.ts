import styled from "styled-components";

export const FooterContainer = styled.div`
  height: "80px";
  justify-content: space-between;
  padding: 10px;
  padding-left: 30px;
  padding-right: 30px;
  font-size: 12px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: var(--bg);
  display: flex;
  z-index: 10;
  .footerleft {
    display: flex;
    flex-direction: row;
  }
  .doneby {
    padding-right: 3px;
  }
  .portfolio {
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
    .smiley > svg {
      transform: rotateX(180deg);
    }
  }
`;
