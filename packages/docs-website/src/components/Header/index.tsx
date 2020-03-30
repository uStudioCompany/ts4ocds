import React from 'react';
import { Link } from 'gatsby';
import categories from '../../lib/categories';
import CategoryMenu from './CategoryMenu';
import Search from './Search';

import Styled from './style';

const Header: React.FC<{ siteTitle: string }> = ({ siteTitle }) => (
  <Styled.Header>
    <Styled.Nav>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        <Styled.SiteTitle>{siteTitle}</Styled.SiteTitle>
      </Link>

      <Styled.ButtonsList>
        {Object.keys(categories).map((category) => (
          <li key={category}>
            <CategoryMenu name={category} modules={categories[category].map((module) => module.name)} />
          </li>
        ))}
      </Styled.ButtonsList>
    </Styled.Nav>

    <Search />
  </Styled.Header>
);

export default Header;
