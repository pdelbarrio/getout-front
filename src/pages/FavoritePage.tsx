import { FavoritesContainer } from "../ui/FavoritesContainer";

function FavoritePage() {
  return (
    <FavoritesContainer>
      <h3>My Favorite Spots</h3>
      <hr />
      <table>
        <thead>
          <tr>
            <th>Spot Name</th>
            <th>Photo</th>
            <th>web</th>
            <th>Remove</th>
          </tr>
        </thead>

        <tbody></tbody>
      </table>
    </FavoritesContainer>
  );
}

export default FavoritePage;
