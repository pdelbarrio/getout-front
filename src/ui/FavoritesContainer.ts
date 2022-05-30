import styled from "styled-components";

export const FavoritesContainer = styled.div`
  /* display: flex;
  flex-wrap: wrap;
  gap: var(--padding-xs);
  justify-content: center;
  overflow: hidden; */
  width: 85%;
  margin: 3rem auto;
  &&& {
    table,
    th,
    td {
      border: 1px solid black;
      border-collapse: collapse;
    }
    th,
    td,
    tr {
      padding: 5px;
    }
    th {
      text-align: left;
    }
    table {
      width: 100%;
    }
  }
`;
