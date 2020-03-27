import styled from 'styled-components';
import { Flex, Grid } from 'ustudio-ui';

const Layout = styled.main`
  display: flex;
  flex-direction: column;

  height: 100%;
`;

const Main = styled(Grid)`
  flex: 1;

  padding: var(--i-large);
`;

const Footer = styled(Flex)`
  padding: var(--i-medium) var(--i-large);
  background-color: var(--c-light);
`;

const Copyright = styled.small`
  margin-right: var(--i-medium);
`;

export default { Layout, Main, Footer, Copyright };
