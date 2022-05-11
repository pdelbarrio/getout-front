import { spots } from "../mocks/spots";
import { Spot } from "../ui/Spot";
import { Tag, TagGroup } from "../ui/Tag";

const SpotById = () => {
  return (
    <div>
      <h1>Spots</h1>

      <div>
        {spots.map((spot) => (
          <Spot key={spot._id}>
            <h3>Name of the spot</h3>

            <img src={spot.images} alt="samplespot" />
            <h4>added by @{spot.uploader.username}</h4>

            <h4>description</h4>
            <p>{spot.description}</p>
            <a href="#">{spot.website}</a>
            <TagGroup>
              {spot.category.map((category) => (
                <Tag key={category}>{category}</Tag>
              ))}
            </TagGroup>
            <h4>Location</h4>
            <p>{spot.location}</p>
          </Spot>
        ))}
      </div>
    </div>
  );
};

export default SpotById;
