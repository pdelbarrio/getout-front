import styled from "styled-components";
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
  /* justify-content: flex-end; */
  /* align-items: stretch; */
`;

export const ContainerDescription = styled.div`
  color: var(--dark) !important;
  cursor: pointer;
  font-weight: bold;
  padding-left: 20px;
  padding-right: 20px;
  margin: auto;

  &:hover {
    color: var(--dark) !important;
    cursor: pointer;
    font-weight: bold;
    padding-left: 20px;
    padding-right: 20px;
    margin: auto;
  }
`;

export const CategoryLink = styled(Link)`
  text-decoration: none;
  background-color: transparent;
  font-weight: bolder;
  font-size: 30px;
  color: var(--dark);
  padding: var(--padding-m);

  &:hover {
    /* mix-blend-mode: difference;
    background-color: #c8b6b6; */
  }
  &:focus {
    mix-blend-mode: color-burn;
  }
`;
