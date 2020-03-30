import { Link } from 'gatsby';
import styled from 'styled-components';
import { Flex } from 'ustudio-ui';
import { Mixin } from 'ustudio-ui/theme';
import { withDisplayNames } from '../../../utils';

const ModulesList = styled.ul`
  display: grid;
  grid-auto-flow: row;
  grid-gap: 2rem;
`;

const Module = styled(Flex)`
  flex: 1;
  padding: var(--i-regular);

  ${Mixin.Style.borderAll({ color: 'var(--c-light)' })};
  border-radius: var(--border-radius);
`;

const CategoryName = styled.h2`
  margin-bottom: var(--i-large);
`;

const ReflectionsList = styled(Flex)`
  flex-wrap: wrap;
  align-self: center;
`;

const Reflection = styled(Link)`
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

export default withDisplayNames({ ModulesList, Module, CategoryName, ReflectionsList, Reflection });