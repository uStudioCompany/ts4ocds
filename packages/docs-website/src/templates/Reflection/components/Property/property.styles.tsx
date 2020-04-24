import React, { ReactElement } from 'react';
import ReactMarkdown from 'react-markdown';
import styled, { css } from 'styled-components';

import Flex from 'ustudio-ui/components/Flex';
import Text from 'ustudio-ui/components/Text';

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

  margin-top: var(--i-small);

  ${Mixin.Screen.xs(css`
    margin-left: var(--i-small);
    margin-top: 0;
  `)}
`;

const Meta = styled(Flex)`
  flex-wrap: wrap;

  ${Mixin.Screen.xs(css`
    flex-wrap: nowrap;
  `)}
`;

export default withDisplayNames({ Property, Name, Description, Type, Meta });
