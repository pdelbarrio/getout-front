import styled from "styled-components";

export const InputContact = styled.input`
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

export const TextAreaContact = styled.textarea`
  color: var(--dark);
  padding: var(--padding-xs);
  border: 2px solid var(--grey);
  border-radius: 10px;
  width: 100%;
  max-width: var(--input-width);

  &:placeholder {
    color: var(--grey);
  }
`;
