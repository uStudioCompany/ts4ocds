import React from 'react';
import { Renderers } from 'react-markdown';
import styled, { css } from 'styled-components';
import { Prism as Code } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Flex from 'ustudio-ui/components/Flex';
import Tag from 'ustudio-ui/components/Tag';
import Text from 'ustudio-ui/components/Text';
import { Mixin } from 'ustudio-ui/theme';

const InlineCode = styled(Tag)`
  ${Mixin.Font.codeRegular()};
  font-size: 12px;
  font-weight: inherit;

  padding: 2px var(--i-small);
`;

const Heading = styled(Text)`
  margin: var(--i-regular) 0;

  ${(props) =>
    props.variant === 'h2'
      ? css`
          position: relative;

          &:after {
            content: '';
            position: absolute;
            left: 0;
            bottom: calc(var(--i-small) * -1);

            width: 100%;
            height: 1px;

            background-color: var(--c-light);
          }
        `
      : ``};
`;

const Root = styled(Flex)`
  flex-direction: column;
  align-items: stretch;
`;

const renderers: Renderers = {
  // eslint-disable-next-line jsx-a11y/anchor-has-content
  link: (props) => <a {...props} target="_blank" rel="noreferrer noopener" />,
  heading: ({ level, children }) => <Heading variant={`h${level}` as 'h1'}>{children}</Heading>,
  inlineCode: (props) => (
    <InlineCode appearance={{ background: 'var(--c-light)', color: 'var(--c-darkest)' }} {...props} />
  ),
  code: ({ language, value }) => (
    <Code
      language={language}
      style={coy}
      customStyle={{ padding: 'var(--i-medium)', backgroundColor: 'var(--c-light)' }}
      codeTagProps={{ style: { whiteSpace: 'pre-wrap' } }}
    >
      {value}
    </Code>
  ),
  root: Root,
};

export default renderers;
