import { Link } from "react-router-dom";
import { categories } from "../utils/types";

const Categories = () => {
  return (
    <div>
      {categories.map((type) => (
        <ul>
          <li>
            <Link to={`/spots/${type.slug}`}>
              <img src={type.image} alt={type.name} />
              {type.name}
            </Link>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Categories;
