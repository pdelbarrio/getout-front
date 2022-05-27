import styled from "styled-components";

export const ButtonContainer = styled.div`
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

export const ButtonModal = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  background: none;
  top: 15px;
  right: 15px;
  cursor: pointer;
  transition: 0.3s ease all;
  border-radius: 5px;
  color: var(--dark);

  &:hover {
    background: #f2f2f2;
  }

  svg {
    width: 100%;
    height: 100%;
    color: white;
  }
`;

export const ButtonInfoModal = styled.button`
  width: 80px;
  height: 80px;
  border: 1px solid #000;
  border-radius: var(--border-radius);
  cursor: pointer;
  background: none;
  flex-shrink: 0;
  font-family: inherit;
  text-overflow: ellipsis;
  transition: all 0.14s ease-out;
  margin: 5px;

  svg {
    width: 100%;
    height: 100%;
    color: white;
  }

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

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled.div`
  width: 500px;
  min-height: 100px;
  background: #fff;
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 20px;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 20px;
`;

export const CloseButton = styled.button`
  position: absolute;
  width: 30px;
  height: 30px;
  border: none;
  background: none;
  top: 15px;
  right: 15px;
  cursor: pointer;
  transition: 0.3s ease all;
  border-radius: 5px;
  color: var(--dark);

  &:hover {
    background: #f2f2f2;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    margin-bottom: 20px;
  }

  img {
    width: 100%;
    vertical-align: top;
    border-radius: 3px;
  }
`;
