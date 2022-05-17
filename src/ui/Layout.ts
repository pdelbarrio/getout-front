import styled from "@emotion/styled";
import { tabletUp } from "./breakpoints";

const Layout = styled.main`
  /* padding: var(--padding-s); */

  ${tabletUp} {
    /* padding: var(--padding-m); */
  }
`;

export default Layout;
