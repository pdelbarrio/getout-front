import { Link } from "react-router-dom";
import { CATEGORIES } from "../constants/categories";
import { CategoriesWrapper, CategoryLink, Content } from "../ui/Categories";

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
              <div className="description">
                <p>{type.description}</p>
              </div>
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
