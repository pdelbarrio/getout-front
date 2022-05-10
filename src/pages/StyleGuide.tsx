import React from "react";
import Image from "../components/Image";
import { Button } from "../ui/Button";
import { Error } from "../ui/Error";
import { Input } from "../ui/form/Input";
import { Spot } from "../ui/Spot";
import { Tag, TagGroup } from "../ui/Tag";
import sampleSpot from "../../public/samplespot.jpg";

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

      <div>
        <h2>Images</h2>

        <Image src="/getoutlogo.png" alt="logo" />
        <Image size="s" src="/getoutlogo.png" alt="logo" />
      </div>

      <div>
        <h2>Tags</h2>

        <TagGroup>
          <Tag>live music</Tag>
          <Tag>cinema</Tag>
        </TagGroup>

        <TagGroup>
          <Tag>weird ✖</Tag>
          <Tag>shops ✖</Tag>
        </TagGroup>
      </div>

      <div>
        <h2>Spot</h2>

        <Spot>
          <h3>Name of the spot</h3>

          <img src={sampleSpot} alt="samplespot" />
          <h4>added by @username</h4>

          <h4>description</h4>
          <p>
            Lorem fistrum condemor elit torpedo. Quietooor no puedor jarl
            adipisicing. Ese hombree ullamco eiusmod tiene musho peligro me cago
            en tus muelas reprehenderit
          </p>
          <a href="#">website.com</a>
          <TagGroup>
            <Tag>live music</Tag>
            <Tag>cinema</Tag>
          </TagGroup>
          <h4>Location</h4>
          <p>Elm Street, 13</p>
        </Spot>
      </div>
    </div>
  );
};

export default StyleGuide;
