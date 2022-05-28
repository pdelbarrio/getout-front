import styled from "@emotion/styled";

export const LoginLayout = styled.div`
  padding-top: 5px;
  display: flex;

  flex-direction: column;
  align-items: center;
  gap: 25px;
`;
export const ButtonVideoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end !important;
`;

export const FormWrapper = styled.div`
  width: 100%;
`;

export const ToggleWrapper = styled.div`
  margin-bottom: 2.5rem;
  justify-content: space-around;
  display: flex;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 2.5rem;
  max-width: var(--input-width);
`;

export const ErrorWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 1rem;
`;

export const ButtonVideo = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  background: none;
  cursor: pointer;
  margin-left: 800px;
  margin-top: 15px;

  @media screen and (max-width: 768px) {
    margin-left: 300px;
    margin-top: 15px;
  }

  svg {
    width: 150%;
    height: 150%;
    color: white;
  }
`;
