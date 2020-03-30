import api from '../api.json';
import { Module, Reflection, ReflectionsMap } from '../typings';

export const generateReflectionsMap = (): ReflectionsMap => {
  return ((api.children as unknown) as Module[])
    .flatMap((module: Module) => module.children.map((reflection) => ({ ...reflection, module: module.name })))
    .reduce((map: ReflectionsMap, child: Reflection) => Object.assign(map, { [child.id]: child }), {});
};
