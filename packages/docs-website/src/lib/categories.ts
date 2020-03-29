import { generateModulesMap } from '../api/generator';
import { Module } from '../api/schema';

const extensionsList = ['Options', 'Metrics', 'Requirements', 'Lots', 'Conversions'];

const categories: Record<string, Module[]> = {
  standard: Object.values(generateModulesMap()).filter((module) => !extensionsList.includes(module.name)),
  extensions: Object.values(generateModulesMap()).filter((module) => extensionsList.includes(module.name)),
};

export default categories;
