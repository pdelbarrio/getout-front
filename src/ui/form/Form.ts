import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  width: 100%;
`;

export const Label = styled.label`
  width: 100%;
  max-width: var(--input-width);
`;

export const ImageFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  width: 100%;
  .buttonform {
    width: 100px;
    align-self: center;
  }
  .inputs {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .container {
    width: 400px;
  }
  .span {
    font-style: italic;
    display: inline-block;
    font-size: 15px;
  }
  .sure {
    font-weight: bold;
  }
  .preview {
    max-width: 400px;
  }

  .uploaded {
    max-width: 400px;
  }
`;

export const InputImage = styled.input`
  color: var(--dark);
  padding: var(--padding-xs);
  border: 2px solid var(--grey);
  border-radius: var(--border-radius);
  width: 100%;
  max-width: var(--input-width);

  &:placeholder {
    color: var(--grey);
  }
`;
