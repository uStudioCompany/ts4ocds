import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';

const Index: React.FC = () => {
  return (
    <Layout>
      <Link to="/categories">Standard</Link>
    </Layout>
  );
};

export default Index;
