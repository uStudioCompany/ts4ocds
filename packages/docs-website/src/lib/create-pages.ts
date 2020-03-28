import { GatsbyNode } from 'gatsby';
import { resolve } from 'path';
import { generateReflectionsMap } from '../api/generator';

export const createPages: GatsbyNode['createPages'] = ({ actions: { createPage } }) => {
  Object.values(generateReflectionsMap()).forEach((reflection) => {
    createPage({
      path: `/${reflection.module}/${reflection.name}`,
      component: resolve('./src/components/Reflection/index.tsx'),
      context: { ...reflection },
    });
  });
};
