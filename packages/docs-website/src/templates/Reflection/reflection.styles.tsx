import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { withDisplayNames } from '../../utils';

const PropertyList = styled.ul`
  display: grid;
  grid-auto-flow: row;
  grid-gap: 1rem;

  margin-top: var(--i-large);
`;

const Description = styled(ReactMarkdown).attrs(() => ({
  renderers: {
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    link: (props) => <a {...props} target="_blank" rel="noreferrer noopener" />,
  },
}))`
  color: var(--c-dark);
`;

export default withDisplayNames({ PropertyList, Description });
