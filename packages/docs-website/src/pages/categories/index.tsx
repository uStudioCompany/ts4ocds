import React from 'react';
import Layout from '../../components/Layout';
import categories from '../../lib/categories';
import Category from './Category';

import Styled from './style';

const Categories: React.FC = () => {
  return (
    <Layout>
      <Styled.CategoriesList>
        {Object.keys(categories).map((category) => (
          <li key={category}>
            <Category name={category} modules={categories[category].map((module) => module.name)} />
          </li>
        ))}
      </Styled.CategoriesList>
    </Layout>
  );
};

export default Categories;
