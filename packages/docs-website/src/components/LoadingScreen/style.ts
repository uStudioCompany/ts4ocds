import styled, { css } from 'styled-components';
import { Flex } from 'ustudio-ui';
import { withDisplayNames } from '../../utils';

const LargeContainer = styled.div<{ isLoaded: boolean }>(
  ({ isLoaded }) => css`
    display: grid;
    grid-auto-rows: min-content;
    grid-gap: var(--i-large);

    opacity: ${isLoaded ? 0 : 1};

    transition: opacity var(--transition);

    position: fixed;
    top: 0;
    left: 0;

    z-index: calc(var(--l-topmost) * 2);

    width: 100%;
    height: 100%;

    padding: calc(var(--i-large) + 49px) var(--i-large) var(--i-large);
    margin: 0 auto;
    pointer-events: ${isLoaded ? 'none' : 'auto'};

    background-color: var(--c-lightest);
  `
);

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

export default withDisplayNames({ LargeContainer, MediumContainer, InlineContainer });
