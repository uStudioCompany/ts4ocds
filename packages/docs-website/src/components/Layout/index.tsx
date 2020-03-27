import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Cell, Flex } from 'ustudio-ui';

import { ThemeProvider } from 'ustudio-ui/theme';

import Styled from './style';
import Header from '../Header';

const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <ThemeProvider>
      <Styled.Layout>
        <Header siteTitle={data.site.siteMetadata.title} />

        <Styled.Main isContainer>
          <Cell>
            <Flex direction="column">{children}</Flex>
          </Cell>
        </Styled.Main>

        <footer>
          <Styled.Footer>
            <Styled.Copyright>©{new Date().getFullYear()}</Styled.Copyright>

            <small>
              Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
            </small>
          </Styled.Footer>
        </footer>
      </Styled.Layout>
    </ThemeProvider>
  );
};

export default Layout;
