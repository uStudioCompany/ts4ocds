import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Cell, Flex } from 'ustudio-ui';
import { useMediaQuery } from 'ustudio-ui/hooks';
import { ThemeProvider } from 'ustudio-ui/theme';

import packageJSON from '../../../../ts4ocds/package.json';

import { modulesMap, reflectionsMap } from '../../api';

import APIContext from '../../context/APIContext';
import Breadcrumbs from './Breadcrumbs';
import GlobalStyles from './global-styles';

import Styled from './style';
import Header from '../Header';

const Layout: React.FC = ({ children }) => {
  const isMd = useMediaQuery('screen and (min-width: 768px)');

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
          <Header siteTitle="TS4OCDS" />

          <Styled.Main isContainer lg={{ maxWidth: 1024 }} xl={{ maxWidth: 1024 }}>
            <Cell>
              <Flex direction="column">
                <Breadcrumbs />

                {children}
              </Flex>
            </Cell>
          </Styled.Main>

          <Styled.Footer>
            <Flex
              direction={isMd ? 'row' : 'column'}
              alignment={
                isMd
                  ? { horizontal: 'space-between', vertical: 'center' }
                  : { horizontal: 'center', vertical: 'space-between' }
              }
            >
              <Styled.Copyright>
                Released under the MIT License. Copyright © 2020. Made by{' '}
                <a href="http://ustudio.company/">uStudio Company</a> with love ❤️{' '}
              </Styled.Copyright>

              <small>
                <a href="https://github.com/uStudioCompany/ts4ocds" target="_blank" rel="noopener noreferrer">
                  TS4OCDS
                </a>{' '}
                v{packageJSON.version}
              </small>
            </Flex>
          </Styled.Footer>
        </Styled.Layout>
      </APIContext.Provider>

      <GlobalStyles />
    </ThemeProvider>
  );
};

export default Layout;
