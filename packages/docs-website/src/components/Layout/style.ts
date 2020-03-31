import styled, { css } from 'styled-components';
import { Flex } from 'ustudio-ui';
import { Mixin } from 'ustudio-ui/theme';
import { withDisplayNames } from '../../utils';

const Layout = styled.main`
  display: flex;
  flex-direction: column;

  align-items: center;

  min-height: 100vh;
`;

const Main = styled(Flex)`
  flex: 1;

  padding: var(--i-large) var(--i-large) 49px;

  ${Mixin.Screen.md(css`
    padding: calc(49px + var(--i-large)) var(--i-large) var(--i-large);

    max-width: 1024px;
  `)}
`;

const Footer = styled.footer`
  display: flex;

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
