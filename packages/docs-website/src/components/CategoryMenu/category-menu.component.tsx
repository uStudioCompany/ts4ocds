import React from 'react';
import { createUrl } from '../../utils';

import Styled from './category-menu.styles';
import StyledHeader from '../Header/header.styles';

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
              <StyledHeader.ModuleLink to={createUrl(module)}>{module}</StyledHeader.ModuleLink>
            </Styled.MenuItem>
          ))}
        </Styled.Menu>
      </Styled.MenuContainer>
    </Styled.ButtonContainer>
  );
};

export default CategoryMenu;
