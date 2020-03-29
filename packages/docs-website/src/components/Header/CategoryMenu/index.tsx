import React from 'react';

import Styled from './style';

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
              <Styled.ModuleLink to={`/${module}`}>{module}</Styled.ModuleLink>
            </Styled.MenuItem>
          ))}
        </Styled.Menu>
      </Styled.MenuContainer>
    </Styled.ButtonContainer>
  );
};

export default CategoryMenu;
