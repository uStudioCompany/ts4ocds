import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as Code } from 'react-syntax-highlighter';
import coy from 'react-syntax-highlighter/dist/cjs/styles/prism/coy';
import { Reflection } from '../api/schema';
import Layout from './Layout';

const StringifyTemplate: React.FC<{ pageContext: Reflection }> = ({ pageContext }) => {
  return (
    <Layout>
      <h1>{pageContext.name}</h1>
      {pageContext?.comment && <p>{pageContext.comment.shortText}</p>}

      <ReactMarkdown
        source={`\`\`\`${JSON.stringify(pageContext, null, 2)}\`\`\``}
        renderers={{
          code: ({ value }) => (
            <Code
              language="typescript"
              style={coy}
              customStyle={{ whiteSpace: 'pre-wrap' }}
              codeTagProps={{ style: { whiteSpace: 'pre-wrap' } }}
            >
              {value}
            </Code>
          ),
        }}
      />
    </Layout>
  );
};

export default StringifyTemplate;
