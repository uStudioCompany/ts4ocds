import { modulesMap } from '../api';
import { Module } from '../api/typings';

const extensionsList = ['Options', 'Metrics', 'Requirements', 'Lots', 'Conversions'];

export const categories: Record<string, Module[]> = {
  standard: Object.values(modulesMap).filter((module) => !extensionsList.includes(module.name)),
  extensions: Object.values(modulesMap).filter((module) => extensionsList.includes(module.name)),
};
