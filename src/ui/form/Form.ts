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
    width: 100%;
  }
  .span {
    font-style: italic;
    font-size: 15px;
  }
  .sure {
    font-weight: bold;
  }
  .upload {
    text-decoration: underline;
    font-size: 30px;
  }
  .upload2 {
    text-decoration: underline;
    font-size: 30px;
  }
  .textupload2 {
    padding: 30px;
  }
  .preview {
    width: 400px;
  }

  .uploaded {
    width: 400px;
    margin-bottom: 20px;
  }
`;
export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const InputImage = styled.input`
  color: var(--dark);
  padding: var(--padding-xs);
  border: 2px solid var(--grey);
  border-radius: var(--border-radius);
  width: 100%;
  max-width: var(--input-width);
  margin: 0 auto;

  &:placeholder {
    color: var(--grey);
  }
`;
