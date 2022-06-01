import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CATEGORIES } from "../constants/categories";
import { SpotContext } from "../context/spot.context";
import {
  FooterGap,
  Spot,
  SpotsGroup,
  SpotsWrapper,
  StyledLinkBack,
  StyledLinkGo,
} from "../ui/Spot";
import { motion } from "framer-motion";

const SpotsByCategory = () => {
  const { getSpots, spots } = useContext(SpotContext);
  const { type } = useParams<{ type?: string }>();
  const [spotsWithBg, setSpotsWithBg] = useState<string>([]);

  useEffect(() => {
    getSpots();
  }, []);

  const colors = [
    "#c92d2e",
    "#f6bd41",
    "#538ff7",
    "#65b867",
    "#837fba",
    "#d1903b",
    "#7d7263",
    "#e524ae",
  ];

  const result = spots.filter(({ category: v }) => v == type);

  console.log(result);
  const description = CATEGORIES.filter((item) => item.slug == type).map(
    (item) => item.description
  );

  const nameOfCategory = CATEGORIES.filter((item) => item.slug == type).map(
    (item) => item.name
  );

  //Para lograr un bg diferente en cada uno tendría que generar un nuevo array que incluyese los spots y un campo de bg
  const bgFunction = () => {};

  return (
    <>
      <SpotsWrapper>
        <StyledLinkBack to={"/categories"}>back</StyledLinkBack>
        <div className="description">
          <h3 className="title">{nameOfCategory}</h3>
          <p>{description}</p>
        </div>
        <SpotsGroup>
          {result.map((spot) => (
            <Spot
              as={motion.div}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.1 }}
              key={spot._id}
            >
              <h4 className="spotname">{spot.name}</h4>

              <img src={spot.image} alt={spot.name} />

              <div className="button">
                <div></div>
                <div>
                  <StyledLinkGo to={`/spot/${spot._id}`}>Go!</StyledLinkGo>
                </div>
              </div>
            </Spot>
          ))}
        </SpotsGroup>
      </SpotsWrapper>
      <FooterGap></FooterGap>
    </>
  );
};

export default SpotsByCategory;
