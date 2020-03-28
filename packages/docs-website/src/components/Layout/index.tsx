import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Cell } from 'ustudio-ui';

import { ThemeProvider } from 'ustudio-ui/theme';
import { generateModulesMap, generateReflectionsMap } from '../../api/generator';
import GlobalStyle from './global-style';

import APIContext from '../../context/APIContext';

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
      <APIContext.Provider
        value={{
          reflections: generateReflectionsMap(),
          modules: generateModulesMap(),
        }}
      >
        <Styled.Layout>
          <Header siteTitle={data.site.siteMetadata.title} />

          <Styled.Main isContainer>
            <Cell>
              <Styled.Container direction="column">{children}</Styled.Container>
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
      </APIContext.Provider>

      <GlobalStyle />
    </ThemeProvider>
  );
};

export default Layout;
