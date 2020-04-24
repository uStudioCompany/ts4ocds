import React, { useState } from 'react';
import { useMediaQuery } from 'ustudio-ui/hooks';
import categories from '../../lib/categories';
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
      <Styled.Nav>
        <Styled.SiteTitleLink to="/">
          <Styled.SiteTitle>{siteTitle}</Styled.SiteTitle>
        </Styled.SiteTitleLink>

        {isMd && <Navigation />}
      </Styled.Nav>

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
