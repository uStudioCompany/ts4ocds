import React from 'react';
import ReactMarkdown, { ReactMarkdownProps } from 'react-markdown';
import readme from '../../README.md';
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
