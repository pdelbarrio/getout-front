import styled from "@emotion/styled";

type ErrorSize = "s" | "m" | "l" | "xl";

const fontSizeBySize = {
  s: "font-size: 0.75rem",
  m: "font-size: 1rem",
  l: "font-size: 2rem",
  xl: "font-size: 3rem",
};

export const Error = styled.p<{ size?: ErrorSize }>`
  color: var(--error);
  padding-left: 10px;

  ${({ size }) => fontSizeBySize[size || "m"]};
`;

export const ErrorContainer = styled.div`
  padding-top: 150px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .error {
    align-self: center;
    width: 300px;
    border-radius: 50%;
    /* padding-bottom: 200px; */
    border: solid 10px var(--error);
  }
`;
