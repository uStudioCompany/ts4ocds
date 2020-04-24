import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import { Drawer } from 'ustudio-ui';
import { Mixin } from 'ustudio-ui/theme';
import { withDisplayNames } from '../../utils';

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: var(--g-t4o);
  padding: var(--i-medium) var(--i-large);

  position: fixed;
  bottom: 0;
  left: 0;

  z-index: calc(var(--l-topmost) + 1);

  width: 100%;

  ${Mixin.Screen.md(css`
    top: 0;
    bottom: unset;
  `)}
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const SiteTitleLink = styled(Link)`
  color: var(--c-lightest);
  margin-right: var(--i-large);

  &:after {
    display: none;
  }
`;

const SiteTitle = styled.h1`
  ${Mixin.Font.h3()};
`;

const ButtonsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: calc(var(--i-medium) * -1) 0 var(--i-large);

  ${Mixin.Screen.md(css`
    flex-direction: row;

    margin: 0 calc(var(--i-medium) * -1);
  `)}
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

const Burger = styled.button<{ isOpen?: boolean }>(
  ({ isOpen }) => css`
    position: relative;

    height: 18px;
    width: 24px;

    background: linear-gradient(
        to bottom,
        transparent calc(50% - 1.5px),
        var(--c-lightest) calc(50% - 1.5px),
        var(--c-lightest) calc(50% + 1.5px),
        transparent calc(50% + 1.5px)
      )
      no-repeat;
    background-position-x: 0;

    transition: var(--transition);

    &:before,
    &:after {
      content: '';
      position: absolute;

      width: 24px;
      height: 3px;
      background-color: var(--c-lightest);

      transform-origin: right center;
      transition: var(--transition);
    }

    &:before {
      top: 0;
    }

    &:after {
      bottom: 0;
    }

    ${isOpen
      ? css`
          background-position-x: 48px;

          &:before {
            transform: rotate(-45deg) scaleX(0.89);
          }

          &:after {
            transform: rotate(45deg) scaleX(0.89);
          }
        `
      : ''};
  `
);

const MobileMenu = styled(Drawer)`
  display: flex;
  flex-direction: column;
  justify-content: center;

  overflow-y: unset;

  margin-bottom: 49px;
  padding: var(--i-large);

  background: var(--g-t4o);
`;

export default withDisplayNames({ Header, Nav, SiteTitle, SiteTitleLink, ButtonsList, ModuleLink, Burger, MobileMenu });
