import React from "react";
import { Button } from "../ui/Button";
import { Error } from "../ui/Error";
import { Input } from "../ui/form/Input";

const StyleGuide = () => {
  return (
    <div>
      <div>
        <h2>Buttons</h2>

        <Button variant="white">Register</Button>
        <Button variant="transparent">Login</Button>
        <Button variant="transparent" disabled>
          Logout
        </Button>
      </div>

      <div>
        <h2>Inputs</h2>

        <Input hasError={false} name="description" placeholder="Get Out BCN" />
        <Input hasError name="description" placeholder="Get Out BCN" />
      </div>

      <div>
        <h2>Errors</h2>

        <Error size="s">Something wrong happened</Error>
        <Error>Something wrong happened</Error>
        <Error size="l">Something wrong happened</Error>
        <Error size="xl">Something wrong happened</Error>
      </div>
    </div>
  );
};

export default StyleGuide;
