import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SpotContext } from "../context/spot.context";
import {
  FooterGap,
  Spot,
  SpotsGroup,
  SpotsWrapper,
  StyledLinkGo,
} from "../ui/Spot";
import { motion } from "framer-motion";

const AddedByPage = () => {
  const { getSpots, spots } = useContext(SpotContext);
  const { userId } = useParams<{ userId?: string }>();

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

  const result = spots.filter((spot) => spot.uploader._id === userId);

  const userName = result[0].uploader.username;

  return (
    <>
      <SpotsWrapper>
        <div className="description">
          <h3 className="title"> Spots added by {userName}</h3>
        </div>
        <SpotsGroup>
          {result.map((spot) => (
            <Spot
              as={motion.div}
              key={spot._id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.1 }}
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

export default AddedByPage;
