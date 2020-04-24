import React, { useState } from 'react';
import { css } from 'styled-components';
import Flex from 'ustudio-ui/components/Flex';
import useMediaQuery from 'ustudio-ui/hooks/use-media-query';

import { categories } from '../../lib';
import CategoryMenu from '../CategoryMenu';
import Search from '../Search';

import Styled from './header.styles';

const Navigation: React.FC = () => (
  <Styled.ButtonsList>
    {Object.keys(categories).map((category) => (
      <li key={category}>
        <CategoryMenu name={category} modules={categories[category].map((module) => module.name)} />
      </li>
    ))}
  </Styled.ButtonsList>
);

const Header: React.FC<{ siteTitle: string }> = ({ siteTitle }) => {
  const [isOpen, setOpen] = useState(false);

  const isMd = useMediaQuery('screen and (min-width: 768px)');

  return (
    <Styled.Header>
      <Flex
        as="nav"
        alignment={{ vertical: 'center' }}
        styled={{
          Flex: css`
            width: auto;
          `,
        }}
      >
        <Styled.SiteTitleLink to="/">
          <Styled.SiteTitle>{siteTitle}</Styled.SiteTitle>
        </Styled.SiteTitleLink>

        {isMd && <Navigation />}
      </Flex>

      {isMd ? (
        <Search />
      ) : (
        <>
          <Styled.Burger onClick={() => setOpen(!isOpen)} isOpen={isOpen} />

          <Styled.MobileMenu onChange={() => setOpen(false)} isOpen={isOpen} position="bottom">
            <Navigation />

            <Search />
          </Styled.MobileMenu>
        </>
      )}
    </Styled.Header>
  );
};

export default Header;
