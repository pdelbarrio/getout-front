import styled from "@emotion/styled";

export const Tag = styled.button`
  background-color: var(--dark);
  color: var(--whitetitle);
  padding: var(--padding-xs);
  text-align: center;
  border-radius: 5px;
  font-weight: bold;
  max-width: 100px;
`;

export const TagGroup = styled.div`
  display: flex;
  align-items: center;
  gap: var(--padding-xs);
`;
