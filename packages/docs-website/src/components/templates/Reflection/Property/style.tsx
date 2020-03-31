import React, { ReactElement } from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { Flex, Text } from 'ustudio-ui';
import { Mixin } from 'ustudio-ui/theme';
import { withDisplayNames } from '../../../../utils';

const Property = styled(Flex)`
  padding: var(--i-regular);

  ${Mixin.Style.borderAll({ color: 'var(--c-light)' })};
  background-color: var(--c-lightest);
  border-radius: var(--border-radius);
`;

const Name = styled(Text).attrs(() => ({
  appearance: 'bold',
}))`
  margin-right: var(--i-medium);
`;

const Description = styled(ReactMarkdown).attrs(() => ({
  renderers: {
    paragraph: ({ children }): ReactElement => <Text variant="small">{children}</Text>,
    strong: ({ children }): ReactElement => <Text variant="small">{children}</Text>,
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    link: (props) => <a {...props} target="_blank" rel="noreferrer noopener" />,
  },
}))`
  color: var(--c-dark);

  margin-top: var(--i-small);
`;

const Type = styled(Flex).attrs(() => ({
  alignment: {
    vertical: 'center',
  },
}))`
  ${Mixin.Font.codeRegular()};
  white-space: pre-wrap;
  flex-wrap: wrap;

  color: var(--c-primary-light);

  margin-left: var(--i-small);
`;

export default withDisplayNames({ Property, Name, Description, Type });
