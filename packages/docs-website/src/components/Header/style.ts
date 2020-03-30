import { Link } from 'gatsby';
import styled from 'styled-components';
import { Mixin } from 'ustudio-ui/theme';
import { withDisplayNames } from '../../utils';

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: linear-gradient(135deg, rgba(155, 175, 0, 0.5), rgba(0, 122, 204, 0.5)),
    linear-gradient(45deg, rgba(0, 122, 204, 0.5), rgba(155, 175, 0, 0.5)), var(--c-primary);
  padding: var(--i-regular);
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const SiteTitle = styled.h1`
  ${Mixin.Font.h3()};

  margin-right: var(--i-large);

  & > *:after {
    display: none;
  }
`;

const ButtonsList = styled.ul`
  display: flex;

  margin: 0 calc(var(--i-medium) * -1);
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

export default withDisplayNames({ Header, Nav, SiteTitle, ButtonsList, ModuleLink });
