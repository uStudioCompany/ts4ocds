import api from '../api.json';
import { Module, Reflection, ReflectionsMap } from '../schema';

export const generateEntitiesMap = (): ReflectionsMap => {
  return (api.children as Module[])
    .flatMap((child: Module) => child.children)
    .reduce((map: ReflectionsMap, child: Reflection) => Object.assign(map, { [child.id]: child }), {});
};
