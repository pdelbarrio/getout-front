import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SpotContext } from "../context/spot.context";
import { FooterGap, SpotsGroup, SpotsWrapper, StyledLinkGo } from "../ui/Spot";
import { motion } from "framer-motion";
import { DISTRICTS } from "../constants/districts";

const SpotsByDistrict = () => {
  const { getSpots, spots } = useContext(SpotContext);
  const { district } = useParams<{ district?: string }>();

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

  const result = spots.filter(({ district: v }) => v == district);

  const nameOfDistrict = DISTRICTS.filter((item) => item.slug == district).map(
    (item) => item.name
  );

  return (
    <>
      <SpotsWrapper>
        <div className="description">
          <h3 className="title"> Spots of {nameOfDistrict}</h3>
        </div>
        <SpotsGroup>
          {result.map((spot) => (
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
      </SpotsWrapper>
      <FooterGap></FooterGap>
    </>
  );
};

export default SpotsByDistrict;
