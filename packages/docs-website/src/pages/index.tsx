import React from 'react';
/**
 * It is the only way for now that I was able to make it work
 */
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import readme from 'raw-loader!./../../README.md';
import ReactMarkdown, { ReactMarkdownProps } from 'react-markdown';
import Layout from '../components/Layout';
import renderers from '../components/renderers';

const Index: React.FC = () => {
  return (
    <Layout>
      <ReactMarkdown source={readme} renderers={renderers as ReactMarkdownProps['renderers']} />
    </Layout>
  );
};

export default Index;
