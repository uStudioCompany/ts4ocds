import { Actions, GatsbyNode } from 'gatsby';
import { resolve } from 'path';
import { reflectionsMap } from '../api';
import { Module } from '../api/typings';
import { createUrl } from '../utils';
import { categories } from './categories';

const createModulePage = (createPage: Actions['createPage']) => (module: Module) =>
  createPage({
    path: createUrl(module.name),
    component: resolve('./src/templates/Module/module.component.tsx'),
    context: { ...module },
  });

export const createPages: GatsbyNode['createPages'] = ({ actions: { createPage } }) => {
  Object.values(reflectionsMap).forEach((reflection) => {
    createPage({
      path: createUrl(reflection.module, reflection.name),
      component: resolve('./src/templates/Reflection/reflection.component.tsx'),
      context: { ...reflection },
    });
  });

  Object.values(categories).forEach((modules) => modules.forEach(createModulePage(createPage)));
};
