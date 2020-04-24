import React, { useEffect, useState } from 'react';
import Cell from 'ustudio-ui/components/Grid/Cell';
import Flex from 'ustudio-ui/components/Flex';
import useMediaQuery from 'ustudio-ui/hooks/use-media-query';
import { ThemeProvider } from 'ustudio-ui/theme';

import packageJSON from '../../../../ts4ocds/package.json';

import { modulesMap, reflectionsMap } from '../../api';

import APIContext from '../../context/api.context';
import LoadingScreen from '../LoadingScreen';
import Breadcrumbs from '../Breadcrumbs';
import GlobalStyles from '../GlobalStyles';

import Styled from './layout.styles';
import Header from '../Header';

const Layout: React.FC = ({ children }) => {
  const [isMounted, setMounted] = useState(false);
  const [isLoaded, setLoaded] = useState(false);

  const isMd = useMediaQuery('screen and (min-width: 768px)');

  useEffect(() => {
    setMounted(true);

    setTimeout(() => setLoaded(true), 1000);

    return () => {
      setMounted(false);
      setLoaded(false);
    };
  }, []);

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
        <LoadingScreen isLoaded={isLoaded} />

        {isMounted && (
          <Styled.Layout>
            <Header siteTitle="TS4OCDS" />

            <Styled.Main isContainer>
              <Cell
                md={{ size: 10, offset: { before: 1, after: 1 } }}
                lg={{ size: 10, offset: { before: 2, after: 2 } }}
                xl={{ size: 10, offset: { before: 3, after: 3 } }}
              >
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
        )}
      </APIContext.Provider>

      <GlobalStyles />
    </ThemeProvider>
  );
};

export default Layout;
