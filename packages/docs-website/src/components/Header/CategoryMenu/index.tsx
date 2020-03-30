import React from 'react';

import Styled from './style';
import StyledHeader from '../style';

const CategoryMenu: React.FC<{ name: string; modules: string[] }> = ({ name, modules }) => {
  return (
    <Styled.ButtonContainer>
      <Styled.MenuButton>
        {`${name.slice(0, 1).toUpperCase()}${name.slice(1)}`} <Styled.MenuIcon />
      </Styled.MenuButton>

      <Styled.MenuContainer>
        <Styled.Menu>
          {modules.map((module: string) => (
            <Styled.MenuItem key={module}>
              <StyledHeader.ModuleLink to={`/${module}`}>{module}</StyledHeader.ModuleLink>
            </Styled.MenuItem>
          ))}
        </Styled.Menu>
      </Styled.MenuContainer>
    </Styled.ButtonContainer>
  );
};

export default CategoryMenu;
