import { createContext, useContext } from 'react';
import { ModulesMap, ReflectionsMap } from '../api/typings';

const APIContext = createContext({} as { reflections: ReflectionsMap; modules: ModulesMap });

export const useReflections = (): ReflectionsMap => useContext(APIContext).reflections;

export const useModules = (): ModulesMap => useContext(APIContext).modules;

export default APIContext;
