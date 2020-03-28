import api from '../api.json';
import { Module, Reflection, ReflectionsMap } from '../schema';

export const generateReflectionsMap = (): ReflectionsMap => {
  return (api.children as Module[])
    .flatMap((module) => module.children.map((reflection) => ({ ...reflection, module: module.name })))
    .reduce((map: ReflectionsMap, child: Reflection) => Object.assign(map, { [child.id]: child }), {});
};
