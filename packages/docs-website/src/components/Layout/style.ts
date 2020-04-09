import styled, { css } from 'styled-components';
import { Grid } from 'ustudio-ui';
import { Mixin } from 'ustudio-ui/theme';
import { withDisplayNames } from '../../utils';

const Layout = styled.main`
  display: flex;
  flex-direction: column;

  align-items: center;

  min-height: 100vh;
`;

const Main = styled(Grid)`
  flex: 1;
  padding: var(--i-large) 0 49px;

  ${Mixin.Screen.md(css`
    padding: calc(49px + var(--i-large)) 0 var(--i-large);
  `)}
`;

const Footer = styled.footer`
  display: flex;
  width: 100%;

  text-align: center;

  margin-bottom: 49px;
  padding: var(--i-medium) var(--i-large);

  background-color: var(--c-light);

  ${Mixin.Screen.md(css`
    text-align: left;

    margin-bottom: 0;
  `)}
`;

const Copyright = styled.small`
  margin-bottom: var(--i-medium);

  ${Mixin.Screen.md(css`
    margin-bottom: 0;
  `)}
`;

export default withDisplayNames({ Layout, Main, Footer, Copyright });
