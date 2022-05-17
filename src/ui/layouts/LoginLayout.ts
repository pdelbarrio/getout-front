import styled from "@emotion/styled";

export const LoginLayout = styled.div`
  padding-top: 5px;
  display: flex;

  flex-direction: column;
  align-items: center;
  gap: 25px;
  background-color: var(--violet);
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
