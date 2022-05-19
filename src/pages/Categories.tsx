import { Link } from "react-router-dom";
import { CATEGORIES } from "../constants/categories";
import { CategoriesWrapper, CategoryLink, Content } from "../ui/Categories";

export type Props = {
  img: string;
  color: string;
};

const Categories = ({ img, color }: Props) => {
  return (
    <CategoriesWrapper>
      {CATEGORIES.map((type) => (
        <ul key={type.id}>
          <li>
            <Content color={type.color} img={type.image}>
              <div></div>
              <CategoryLink to={`/spots/${type.slug}`}>
                <div>
                  <p>{type.name}</p>
                </div>
              </CategoryLink>
            </Content>
            {/* <Link className="parent" to={`/spots/${type.slug}`}>
              <img className="child child1" src={type.image} alt={type.name} />
              <div className="child child2"></div>
              <p>{type.name}</p>
            </Link> */}
          </li>
        </ul>
      ))}
    </CategoriesWrapper>
  );
};

export default Categories;
