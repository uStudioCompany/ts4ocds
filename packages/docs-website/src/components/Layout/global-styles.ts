import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --g-t4o: linear-gradient(135deg, rgba(155, 175, 0, 0.5), rgba(0, 122, 204, 0.5)),
    linear-gradient(45deg, rgba(0, 122, 204, 0.5), rgba(155, 175, 0, 0.5)), var(--c-primary);
  }
`;

export default GlobalStyles;
