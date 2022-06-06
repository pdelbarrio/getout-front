import styled from "@emotion/styled";

export const FormLayout = styled.div`
  background-color: transparent;
  color: var(--text);
  padding: var(--padding-s);
  border: 2px solid;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: var(--padding-s);
  margin-right: 10px;
  margin-left: 10px;

  > h3 {
    align-self: center;
  }
  .contacttext {
    max-width: 400px;
    margin: 0 auto;
    padding-top: 50px;
    padding-bottom: 50px;
  }
`;
