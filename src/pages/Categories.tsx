import { Link } from "react-router-dom";
import { CATEGORIES } from "../constants/categories";
import {
  CategoriesWrapper,
  CategoryLink,
  ContainerDescription,
  Content,
} from "../ui/Categories";

export type Props = {
  img?: string;
  color?: string;
};

const Categories = ({ img, color }: Props) => {
  return (
    <CategoriesWrapper>
      {CATEGORIES.map((type) => (
        <ul key={type.id}>
          <li>
            <Content color={type.color} img={type.image}>
              <ContainerDescription>{type.description}</ContainerDescription>
              <CategoryLink to={`/spots/${type.slug}`}>
                <div>
                  <p>{type.name}</p>
                </div>
              </CategoryLink>
            </Content>
          </li>
        </ul>
      ))}
    </CategoriesWrapper>
  );
};

export default Categories;
