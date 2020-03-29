import { Link } from 'gatsby';
import styled from 'styled-components';
import { Flex } from 'ustudio-ui';

const CategoriesList = styled.ul`
  display: grid;
  grid-auto-flow: row;
  grid-gap: 2rem;
`;
CategoriesList.displayName = 'CategoriesList';

const Category = styled(Flex)`
  flex: 1;
  padding: var(--i-regular);

  border-radius: var(--border-radius);
  box-shadow: var(--neumo-shadow);
`;
Category.displayName = 'Category';

const CategoryName = styled.h2`
  margin-bottom: var(--i-large);
`;
CategoryName.displayName = 'CategoryName';

const ModulesList = styled(Flex)`
  flex-wrap: wrap;
  align-self: center;
`;
ModulesList.displayName = 'ModulesList';

const Module = styled(Link)`
  position: relative;
  overflow: hidden;

  padding: var(--i-regular) var(--i-large);
  color: var(--c-primary);
  border-radius: var(--border-radius);

  transition: var(--transition);

  &:hover {
    &:before {
      background-color: var(--c-primary);
    }
  }

  &:active {
    &:before {
      background-color: var(--c-primary-light);
    }
  }

  &:focus {
    box-shadow: var(--neumo-shadow);
  }

  &:before {
    content: '';
    opacity: 0.1;

    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    transition: var(--transition);
  }

  &:after {
    display: none;
  }
`;
Module.displayName = 'Module';

export default { CategoriesList, Category, CategoryName, ModulesList, Module };
