import styled, { css } from 'styled-components';
import LogoIcon from '../../assets/images/ts4ocds-logo.inline.svg';
import { withDisplayNames } from '../../utils';

const Logo = styled(LogoIcon)`
  width: 50%;
  height: auto;
`;

const LoadingScreen = styled.div<{ isLoaded: boolean }>(
  ({ isLoaded }) => css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    z-index: calc(var(--l-topmost) * 2);

    display: flex;
    align-items: center;
    justify-content: center;

    color: var(--c-lightest);
    background: var(--g-t4o);

    opacity: ${isLoaded ? 0 : 1};
    pointer-events: none;

    transition: opacity var(--transition);
  `
);

export default withDisplayNames({ Logo, LoadingScreen });
