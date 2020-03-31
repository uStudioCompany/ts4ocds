import styled, { css } from 'styled-components';
import { Mixin } from 'ustudio-ui/theme';
import { withDisplayNames } from '../../../utils';
import Caret from './Caret';

const ButtonContainer = styled.div`
  position: relative;
`;

const MenuContainer = styled.div`
  position: absolute;
  bottom: 100%;
  left: 50%;

  transform: translateX(-50%);

  z-index: var(--l-top);

  overflow-x: auto;

  max-height: 25vh;

  opacity: 0;
  pointer-events: none;

  background-color: var(--c-lightest);
  ${Mixin.Style.borderAll({ color: 'var(--c-light)' })};
  border-radius: var(--border-radius);

  transition: var(--transition);

  &:hover,
  &:focus-within {
    opacity: 1;
    pointer-events: auto;
  }

  ${Mixin.Screen.md(css`
    top: 100%;
    left: 0;
    bottom: unset;

    transform: translateX(0);

    max-height: 50vh;
  `)}
`;

const MenuIcon = styled(Caret)`
  width: 12px;
  height: 12px;

  margin-top: 3px;
  margin-left: var(--i-regular);

  transform: rotate(-180deg);
  transform-origin: center;

  transition: transform var(--transition);
`;

const MenuButton = styled.button`
  ${Mixin.Font.bodyRegular()};
  ${Mixin.Style.inputPadding()};
  margin: var(--i-medium) 0;

  display: flex;
  align-items: center;

  color: var(--c-lightest);

  transition: var(--transition);

  &:hover {
    color: var(--c-neutral);

    ${MenuIcon} {
      transform: rotate(0deg);
    }

    & + ${MenuContainer} {
      opacity: 1;
      pointer-events: auto;
    }
  }

  ${Mixin.Screen.md(css`
    margin: 0 var(--i-medium);
  `)}
`;

const Menu = styled.ul`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

const MenuItem = styled.li`
  width: 100%;
`;

export default withDisplayNames({ ButtonContainer, MenuIcon, MenuButton, MenuContainer, Menu, MenuItem });
