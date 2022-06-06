import { CATEGORIES } from "../constants/categories";
import { motion } from "framer-motion";

import {
  CategoriesWrapper,
  CategoryLink,
  ContainerDescription,
  Content,
} from "../ui/Categories";
import { FooterGap } from "../ui/Spot";

export type Props = {
  img?: string;
  color?: string;
};

const Categories = ({ img, color }: Props) => {
  return (
    <>
      <CategoriesWrapper>
        {CATEGORIES.map((type) => (
          <ul key={type.id}>
            <li>
              <Content color={type.color} img={type.image}>
                <ContainerDescription>
                  <p>{type.description}</p>
                </ContainerDescription>
                <CategoryLink to={`/spots/${type.slug}`}>
                  <motion.button
                    className="buttoncontainer"
                    whileHover={{ scale: 1.1 }}
                    // whileTap={{ scale: 1.1 }}
                  >
                    <p>{type.name}</p>
                  </motion.button>
                </CategoryLink>
              </Content>
            </li>
          </ul>
        ))}
      </CategoriesWrapper>
      <FooterGap></FooterGap>
    </>
  );
};

export default Categories;
