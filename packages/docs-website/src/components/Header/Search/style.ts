import styled from 'styled-components';
import { Mixin } from 'ustudio-ui/theme';
import { withDisplayNames } from '../../../utils';

const ResultsContainer = styled.div`
  position: absolute;
  top: 100%;
  right: 0;

  z-index: var(--l-top);

  overflow-x: auto;

  min-height: 1.875rem;
  max-height: 50vh;
  width: 100%;

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

const SearchContainer = styled.div`
  position: relative;
  flex: 0.33;

  &:focus-within {
    ${ResultsContainer} {
      opacity: 1;
      pointer-events: auto;
    }
  }
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
