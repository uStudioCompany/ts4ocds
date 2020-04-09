import styled, { css } from 'styled-components';
import { Flex } from 'ustudio-ui';
import { Mixin } from 'ustudio-ui/theme';
import { withDisplayNames } from '../../utils';

const Wrapper = styled.div<{ isLoaded: boolean }>(
  ({ isLoaded }) => css`
    padding: var(--i-large) var(--i-large) 49px;

    width: 100vw;
    height: 100vh;

    background-color: var(--c-lightest);

    opacity: ${isLoaded ? 0 : 1};

    transition: opacity var(--transition);

    position: fixed;
    top: 0;
    left: 0;

    z-index: calc(var(--l-topmost) * 2);

    pointer-events: ${isLoaded ? 'none' : 'auto'};

    ${Mixin.Screen.md(css`
      padding: calc(49px + var(--i-large)) 0 var(--i-large);
    `)}
  `
);

const LargeContainer = styled.div`
  display: grid;
  grid-auto-rows: min-content;
  grid-gap: var(--i-large);

  width: 100%;
  height: 100%;
`;
const MediumContainer = styled.div`
  display: grid;
  grid-auto-rows: min-content;
  grid-gap: var(--i-regular);
`;

const InlineContainer = styled(Flex)`
  margin: 0 calc(var(--i-medium) * -1);

  & > * {
    margin: 0 var(--i-medium);
  }
`;

export default withDisplayNames({ LargeContainer, MediumContainer, InlineContainer, Wrapper });
