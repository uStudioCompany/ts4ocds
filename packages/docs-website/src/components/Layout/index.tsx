import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Cell, Flex } from 'ustudio-ui';
import { ThemeProvider } from 'ustudio-ui/theme';

import packageJSON from '../../../../ts4ocds/package.json';

import { modulesMap, reflectionsMap } from '../../api';

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
    <ThemeProvider
      override={{
        palette: { primary: '#007ACC', 'primary-light': '#9BAF00' },
      }}
    >
      <APIContext.Provider
        value={{
          reflections: reflectionsMap,
          modules: modulesMap,
        }}
      >
        <Styled.Layout>
          <Header siteTitle={data.site.siteMetadata.title} />

          <Styled.Main isContainer lg={{ maxWidth: 1024 }} xl={{ maxWidth: 1024 }}>
            <Cell>
              <Flex direction="column">{children}</Flex>
            </Cell>
          </Styled.Main>

          <footer>
            <Styled.Footer alignment={{ horizontal: 'space-between', vertical: 'center' }}>
              <span>
                <Styled.Copyright>©{new Date().getFullYear()}</Styled.Copyright>

                <small>
                  Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
                </small>
              </span>

              <small>
                <a href="https://github.com/uStudioCompany/ts4ocds" target="_blank">
                  TS4OCDS
                </a>{' '}
                v{packageJSON.version}
              </small>
            </Styled.Footer>
          </footer>
        </Styled.Layout>
      </APIContext.Provider>
    </ThemeProvider>
  );
};

export default Layout;
