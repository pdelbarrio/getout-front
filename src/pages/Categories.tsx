import { Link } from "react-router-dom";
import { CATEGORIES } from "../constants/categories";

const Categories = () => {
  return (
    <div>
      {CATEGORIES.map((type) => (
        <ul key={type.id}>
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
