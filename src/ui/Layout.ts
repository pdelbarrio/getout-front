import styled from "@emotion/styled";

const Layout = styled.main`
  padding: var(--padding-m);

  h1,
  h2,
  h3,
  h4 {
    color: var(--whitetitle);
  }

  p,
  span {
    color: var(--dark);
  }

  h1,
  h2,
  h3,
  h4 {
    color: var(--whitetitle);
    font-weight: bold;
    line-height: 100%;
  }

  h1 {
    font-size: 4rem;
  }

  h2 {
    font-size: 3rem;
  }

  h3 {
    font-size: 2rem;
  }

  h4,
  input,
  textarea,
  select {
    font-size: 1rem;
  }
`;

export default Layout;
