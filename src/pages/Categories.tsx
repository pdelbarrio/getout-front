import { Link } from "react-router-dom";
import { CATEGORIES } from "../constants/categories";
import { motion } from "framer-motion";

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
              <ContainerDescription
                as={motion.div}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                whileTap={{ opacity: 1 }}
              >
                {type.description}
              </ContainerDescription>
              <CategoryLink to={`/spots/${type.slug}`}>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1.1 }}
                >
                  <div>
                    <p>{type.name}</p>
                  </div>
                </motion.button>
              </CategoryLink>
            </Content>
          </li>
        </ul>
      ))}
    </CategoriesWrapper>
  );
};

export default Categories;
