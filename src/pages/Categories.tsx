import { Link } from "react-router-dom";
import { CATEGORIES } from "../constants/categories";
import { CategoriesWrapper } from "../ui/Categories";

const Categories = () => {
  return (
    <CategoriesWrapper>
      {CATEGORIES.map((type) => (
        <ul key={type.id}>
          <li>
            <Link to={`/spots/${type.slug}`}>
              <img src={type.image} alt={type.name} />
              <p>{type.name}</p>
            </Link>
          </li>
        </ul>
      ))}
    </CategoriesWrapper>
  );
};

export default Categories;
