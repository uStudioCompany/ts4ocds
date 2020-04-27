import { Actions, GatsbyNode, Page } from 'gatsby';
import { resolve } from 'path';
import { reflectionsMap } from '../api';
import { Module } from '../api/typings';
import { createUrl } from '../utils';
import { categories } from './categories';

async function asyncCreatePage<A extends Page>(createPage: Actions['createPage'], args: A): Promise<void> {
  createPage(args);
}

const createModulePage = async (createPage: Actions['createPage'], module: Module): Promise<void> => {
  await asyncCreatePage(createPage, {
    path: createUrl(module.name),
    component: resolve('./src/templates/Module/module.component.tsx'),
    context: { ...module },
  });
};

export const createPages: GatsbyNode['createPages'] = async ({ actions: { createPage } }) => {
  await Promise.all(
    Object.values(reflectionsMap).map(async (reflection) => {
      return asyncCreatePage(createPage, {
        path: createUrl(reflection.module, reflection.name),
        component: resolve('./src/templates/Reflection/reflection.component.tsx'),
        context: { ...reflection },
      });
    })
  );

  await Promise.all(
    Object.values(categories).map(async (modules) => {
      return modules.map(async (module) => createModulePage(createPage, module));
    })
  );
};
