import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { withDisplayNames } from '../../../utils';

const PropertyList = styled.ul`
  display: grid;
  grid-auto-flow: row;
  grid-gap: 1rem;

  margin-top: var(--i-large);
`;

const Description = styled(ReactMarkdown)`
  color: var(--c-dark);
`;

export default withDisplayNames({ PropertyList, Description });
