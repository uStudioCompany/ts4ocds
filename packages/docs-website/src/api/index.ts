import { generateModulesMap } from './generator/modules-map.generator';
import { generateReflectionsMap } from './generator/reflections-map.generator';
import { ModulesMap, ReflectionsMap } from './typings';

export const reflectionsMap: ReflectionsMap = generateReflectionsMap();

export const modulesMap: ModulesMap = generateModulesMap();
