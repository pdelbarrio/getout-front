import styled from "@emotion/styled";

export type ImageSizes = "xs" | "s" | "m";

const imageWidthBySize = {
  xs: "width: 50px",
  s: "width: 150px",
  m: "width: 240px",
};

export const ImageContainer = styled.div<{ size?: ImageSizes }>`
  ${({ size }) => imageWidthBySize[size || "m"]};

  > img {
    height: auto;
    width: 100%;
  }
`;
