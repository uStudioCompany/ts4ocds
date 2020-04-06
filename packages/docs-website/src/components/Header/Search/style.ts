import styled, { css } from 'styled-components';
import { Mixin } from 'ustudio-ui/theme';
import { withDisplayNames } from '../../../utils';

const ResultsContainer = styled.div`
  position: absolute;
  bottom: 100%;
  right: 0;

  z-index: calc(var(--l-topmost) + 2);

  overflow-x: auto;

  min-height: 1.875rem;
  max-height: 25vh;
  min-width: 100%;

  opacity: 0;
  pointer-events: none;

  background-color: var(--c-lightest);
  ${Mixin.Style.borderAll({ color: 'var(--c-light)' })};
  border-radius: var(--border-radius);

  transition: var(--transition);

  &:active,
  &:focus-within {
    pointer-events: auto;
  }

  ${Mixin.Screen.md(css`
    top: 100%;
    bottom: unset;

    max-height: 50vh;
  `)}
`;

const SearchContainer = styled.div`
  position: relative;
  flex: 0.5;

  &:focus-within {
    ${ResultsContainer} {
      opacity: 1;
      pointer-events: auto;
    }
  }

  ${Mixin.Screen.lg(css`
    flex: 0.33;
  `)}
`;

const NoResults = styled.small`
  color: var(--c-neutral);
  padding: var(--i-medium) var(--i-small);
`;

const GroupList = styled.ul`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

const GroupListTitle = styled.li`
  padding: var(--i-small) var(--i-regular);
  color: var(--c-dark);

  border-top: 1px solid var(--c-light);
  border-bottom: 1px solid var(--c-light);
`;

export default withDisplayNames({ SearchContainer, ResultsContainer, NoResults, GroupList, GroupListTitle });
