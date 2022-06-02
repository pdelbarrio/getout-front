import styled from "styled-components";
import { Link } from "react-router-dom";

export const Category = styled.div``;

export const CategoriesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--padding-xs);
  justify-content: center;
  overflow: hidden;
  resize: both;
`;

export const Content = styled.div<{ img: string; color: string }>`
  width: 439px;
  height: 256px;
  background-image: url(${(props) => props.img});
  background-color: ${(props) => props.color};
  background-blend-mode: screen;
  display: flex;
  flex-direction: column;

  .buttoncontainer {
    text-decoration: none;
    /* background-color: transparent; */
    font-weight: bold;
    font-size: 30px;
    padding: var(--padding-s);
    border-radius: 20px;
    width: 350px;
    margin-left: 30px;
  }
`;

export const ContainerDescription = styled.div`
  color: var(--dark) !important;
  cursor: pointer;
  font-weight: bold;
  padding-left: 50px;
  padding-right: 20px;
  margin: auto;
`;

export const CategoryLink = styled(Link)`
  font-weight: bold;
  font-size: 30px;
  padding: var(--padding-s);
  border-radius: 20px;
  cursor: pointer;
`;
export const DistrictLink = styled(Link)`
  margin-top: 10px;
  background-color: var(--dark);
  color: var(--white);
  padding: var(--padding-s);
  text-align: center;
  border-radius: 5px;
  /* font-weight: bold; */
  max-width: 100px;
  cursor: pointer;
`;

export const CatSpottLink = styled(Link)`
  margin-top: 10px;
  background-color: var(--dark);
  color: var(--white);
  padding: var(--padding-s);
  text-align: center;
  border-radius: 5px;
  /* font-weight: bold; */
  max-width: 100px;
  cursor: pointer;
`;
