import React from 'react';

import Styled from './style';

interface CategoryProps {
  name: string;
  modules: string[];
}

const Category: React.FC<CategoryProps> = ({ name, modules }) => {
  return (
    <Styled.Category direction="column" alignment={{ horizontal: 'center' }}>
      <Styled.CategoryName>{`${name.slice(0, 1).toUpperCase()}${name.slice(1)}`}</Styled.CategoryName>

      <Styled.ModulesList alignment={{ horizontal: 'center' }}>
        {modules.map((module) => (
          <Styled.Module to={`/${module}`} key={module}>
            {module}
          </Styled.Module>
        ))}
      </Styled.ModulesList>
    </Styled.Category>
  );
};

export default Category;
