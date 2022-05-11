import styled from "@emotion/styled";

export const Spot = styled.div`
  background-color: var(--green);
  color: var(--dark);
  padding: var(--padding-s);
  border: 3px solid;
  border-style: dashed;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  gap: var(--padding-s);
  max-width: 300px;

  .go {
    width: 7vw;
  }

  > a {
    box-shadow: inset 0 0 0 0 var(--dark);
    color: var(--dark);
    margin: 0 -0.25rem;
    padding: 0 0.25rem;
    transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  }
  a:hover {
    box-shadow: inset 10vw 0 0 0 var(--dark);
    color: white;
  }
`;

export const SpotsGroup = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: var(--padding-xs);
`;

export const SingleSpot = styled.div`
  background-color: var(--green);
  color: var(--dark);
  padding: var(--padding-s);
  border: 3px solid;
  border-style: dashed;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  gap: var(--padding-s);
  max-width: 700px;
  margin: 0 auto;

  .back {
    width: 5vw;
  }

  > a {
    box-shadow: inset 0 0 0 0 var(--dark);
    color: var(--dark);
    margin: 0 -0.25rem;
    padding: 0 0.25rem;
    transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  }
  a:hover {
    box-shadow: inset 15vw 0 0 0 var(--dark);
    color: white;
  }
`;
