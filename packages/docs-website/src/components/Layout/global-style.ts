import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --neumo-shadow: -4px -4px 4px 0 #fff, 4px 4px 4px 0 var(--c-light);
  }
`;

export default GlobalStyle;
