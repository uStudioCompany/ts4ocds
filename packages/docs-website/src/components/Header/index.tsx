import React from 'react';
import { Link } from 'gatsby';

import Styled from './style';

const Header: React.FC<{ siteTitle: string }> = ({ siteTitle }) => (
  <Styled.Header>
    <h1>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
    </h1>
  </Styled.Header>
);

export default Header;
