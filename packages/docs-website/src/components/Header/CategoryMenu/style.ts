import { Link } from 'gatsby';
import styled from 'styled-components';
import { Mixin } from 'ustudio-ui/theme';
import Caret from './Caret';

const ButtonContainer = styled.div`
  position: relative;
`;

const MenuContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;

  z-index: var(--l-top);

  overflow-x: auto;

  max-height: 50vh;

  opacity: 0;
  pointer-events: none;

  background-color: var(--c-lightest);
  ${Mixin.Style.borderAll({ color: 'var(--c-light)' })};
  border-radius: var(--border-radius);

  transition: var(--transition);

  &:focus-within {
    pointer-events: auto;
  }
`;

const MenuIcon = styled(Caret)`
  width: 12px;
  height: 12px;

  margin-left: var(--i-regular);

  transform: rotate(-180deg);
  transform-origin: center;

  transition: transform var(--transition);
`;

const MenuButton = styled.button`
  ${Mixin.Font.bodyRegular()};
  ${Mixin.Style.inputPadding()};
  margin: 0 var(--i-regular);

  display: flex;
  align-items: center;

  color: var(--c-lightest);

  transition: var(--transition);

  &:hover {
    color: var(--c-neutral);
  }

  &:focus-within {
    ${MenuIcon} {
      transform: rotate(0deg);
    }

    & + ${MenuContainer} {
      opacity: 1;
      pointer-events: auto;
    }
  }
`;

const Menu = styled.ul`
  display: flex;
  flex-direction: column;

  padding: var(--i-medium) 0;

  width: 100%;
`;

const MenuItem = styled.li`
  width: 100%;
`;

const ModuleLink = styled(Link)`
  display: block;
  width: 100%;

  position: relative;
  overflow: hidden;

  padding: var(--i-medium) var(--i-regular);
  color: var(--c-primary);

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
    color: var(--c-darkest);
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

export default { ButtonContainer, MenuIcon, MenuButton, MenuContainer, Menu, MenuItem, ModuleLink };
