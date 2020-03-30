import styled from 'styled-components';
import { Flex, Grid } from 'ustudio-ui';
import { withDisplayNames } from '../../utils';

const Layout = styled.main`
  display: flex;
  flex-direction: column;

  min-height: 100vh;
`;

const Main = styled(Grid)`
  flex: 1;

  padding: var(--i-large);
`;

const Footer = styled.footer`
  padding: var(--i-medium) var(--i-large);
  background-color: var(--c-light);
`;

const Copyright = styled.small`
  margin-right: var(--i-medium);
`;

export default withDisplayNames({ Layout, Main, Footer, Copyright });
