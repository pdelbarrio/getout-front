import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Category = styled.div``;

export const CategoriesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--padding-xs);
  justify-content: center;
  overflow: hidden;
`;

export const Content = styled.div<{ img: string; color: string }>`
  width: 439px;
  height: 256px;
  background-image: url(${(props) => props.img});
  background-color: ${(props) => props.color};
  background-blend-mode: screen;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  .description {
    display: block;
    &:hover {
      display: none;
    }
  }
`;

export const CategoryLink = styled(Link)`
  text-decoration: none;
  background-color: var(--grey);
  font-weight: bolder;
  font-size: 30px;
  color: white;
  padding: var(--padding-m);
  mix-blend-mode: hard-light;

  &:hover {
    mix-blend-mode: difference;
  }
  &:focus {
    mix-blend-mode: color-burn;
  }
`;
