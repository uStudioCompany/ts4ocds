import { modulesMap } from '../api';
import { Module } from '../api/typings';

const extensionsList = ['Options', 'Metrics', 'Requirements', 'Lots', 'Conversions'];

const categories: Record<string, Module[]> = {
  standard: Object.values(modulesMap).filter((module) => !extensionsList.includes(module.name)),
  extensions: Object.values(modulesMap).filter((module) => extensionsList.includes(module.name)),
};

export default categories;
