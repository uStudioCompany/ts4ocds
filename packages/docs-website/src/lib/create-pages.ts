import { Actions, GatsbyNode } from 'gatsby';
import { resolve } from 'path';
import { generateReflectionsMap } from '../api/generator';
import { Module } from '../api/schema';
import categories from './categories';

const createModulePage = (createPage: Actions['createPage']) => (module: Module) =>
  createPage({
    path: `/${module.name}`,
    component: resolve('./src/components/templates/Module/index.tsx'),
    context: { ...module },
  });

export const createPages: GatsbyNode['createPages'] = ({ actions: { createPage } }) => {
  Object.values(generateReflectionsMap()).forEach((reflection) => {
    createPage({
      path: `/${reflection.module}/${reflection.name}`,
      component: resolve('./src/components/templates/Reflection/index.tsx'),
      context: { ...reflection },
    });
  });

  Object.values(categories).forEach((modules) => modules.forEach(createModulePage(createPage)));
};
