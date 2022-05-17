import { useState } from "react";
import RightNav from "./RightNav";
import { StyledBurger } from "../../ui/Navbar";

const Burger = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} />
    </>
  );
};

export default Burger;
