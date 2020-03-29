import React, { ReactElement } from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { Flex, Text } from 'ustudio-ui';
import { Mixin } from 'ustudio-ui/theme';

const Property = styled(Flex)`
  width: 100%;

  padding: var(--i-regular);

  background-color: var(--c-lightest);
  border-radius: var(--border-radius);
  box-shadow: var(--neumo-shadow);
`;
Property.displayName = 'Property';

const Name = styled(Text).attrs(() => ({
  appearance: 'bold',
}))`
  margin-right: var(--i-medium);
`;
Name.displayName = 'Name';

const Description = styled(ReactMarkdown).attrs(() => ({
  renderers: {
    paragraph: ({ children }): ReactElement => <Text variant="small">{children}</Text>,
    strong: ({ children }): ReactElement => <Text variant="small">{children}</Text>,
  },
}))`
  color: var(--c-dark);

  margin-top: var(--i-small);
`;
Description.displayName = 'Description';

const Type = styled(Flex).attrs(() => ({
  alignment: {
    vertical: 'center',
  },
}))`
  ${Mixin.Font.codeRegular()};

  color: var(--c-primary);

  margin-left: var(--i-small);
  margin-bottom: 2px;
`;
Type.displayName = 'Type';

export default { Property, Name, Description, Type };
