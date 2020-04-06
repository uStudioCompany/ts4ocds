import { createContext, useContext } from 'react';

const ModuleContext = createContext({} as { module: string });

export const useModule = (): string => useContext(ModuleContext).module;

export default ModuleContext;
