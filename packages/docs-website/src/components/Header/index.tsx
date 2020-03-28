import React from 'react';
import { Link } from 'gatsby';

import Styled from './style';

const Header: React.FC<{ siteTitle: string }> = ({ siteTitle }) => (
  <Styled.Header>
    <Styled.SiteTitle>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
    </Styled.SiteTitle>
  </Styled.Header>
);

export default Header;
