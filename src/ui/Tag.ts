import styled from "@emotion/styled";

export const Tag = styled.button`
  margin-top: 10px;
  background-color: var(--dark);
  color: var(--white);
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
