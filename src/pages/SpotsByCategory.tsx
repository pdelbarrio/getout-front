import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CATEGORIES } from "../constants/categories";
import { SpotContext } from "../context/spot.context";
import {
  FooterGap,
  SpotsGroup,
  SpotsWrapper,
  StyledLinkBack,
  StyledLinkGo,
} from "../ui/Spot";
import { motion } from "framer-motion";

const SpotsByCategory = () => {
  const { getSpots, spots } = useContext(SpotContext);
  const [paginate, setpaginate] = useState(8);
  const { type } = useParams<{ type?: string }>();

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

  const description = CATEGORIES.filter((item) => item.slug == type).map(
    (item) => item.description
  );

  const nameOfCategory = CATEGORIES.filter((item) => item.slug == type).map(
    (item) => item.name
  );

  // Para lograr un bg diferente en cada uno tendría que generar un nuevo array que incluyese los spots y un campo de bg
  //  const bgFunction = () => {
  //   const newArray = result.map(spot => ({...spot, bgColor: "#c92d2e"}))
  //   console.log(newArray)
  //   return newArray;
  // };
  const resultPaginated = result.slice(0, paginate);

  const load_more = (event: any) => {
    setpaginate((prevValue) => prevValue + 8);
  };

  return (
    <>
      <SpotsWrapper>
        <StyledLinkBack to={"/categories"}>back</StyledLinkBack>
        <div className="description">
          <h3 className="title">{nameOfCategory}</h3>
          <p>{description}</p>
        </div>
        <SpotsGroup>
          {resultPaginated.map((spot) => (
            <motion.div
              className="spotcard"
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
            </motion.div>
          ))}
        </SpotsGroup>
        {/* Make conditional button // TODO:*/}
        <button onClick={load_more}>Load More</button>
      </SpotsWrapper>
      <FooterGap></FooterGap>
    </>
  );
};

export default SpotsByCategory;
