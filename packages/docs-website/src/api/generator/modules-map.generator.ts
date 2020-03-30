import api from '../api.json';
import type { ModulesMap } from '../typings';

export const generateModulesMap = (): ModulesMap => {
  return api.children.reduce((modulesMap, child) => Object.assign(modulesMap, { [child.id]: child }), {});
};
