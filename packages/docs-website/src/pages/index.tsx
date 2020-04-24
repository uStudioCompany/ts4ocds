import React from 'react';
import ReactMarkdown, { ReactMarkdownProps } from 'react-markdown';
import { Helmet } from 'react-helmet';
import readme from '../../README.md';
import Layout from '../components/Layout';
import renderers from '../components/renderers';

const Index: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>TS4OCDS</title>
      </Helmet>

      <Layout>
        <ReactMarkdown source={readme} renderers={renderers as ReactMarkdownProps['renderers']} />
      </Layout>
    </>
  );
};

export default Index;
