import {
  BooleanRequirement,
  Criterion,
  ItemCriterion,
  NumberRequirement,
  Requirement,
  StringRequirement,
  TendererCriterion,
} from '../../extensions/requirements';

export const isRelatedToTenderer = (criterion: Criterion): criterion is TendererCriterion => {
  return criterion?.relatesTo === 'tenderer';
};

export const isRelatedToItem = (criterion: Criterion): criterion is ItemCriterion => {
  return criterion?.relatesTo === 'item';
};

export const isOfTypeString = (requirement: Requirement): requirement is StringRequirement => {
  return requirement.dataType === 'string';
};

export const isOfTypeBoolean = (requirement: Requirement): requirement is BooleanRequirement => {
  return requirement.dataType === 'boolean';
};

export const isOfTypeNumber = (requirement: Requirement): requirement is NumberRequirement => {
  return requirement.dataType === 'number' || requirement.dataType === 'integer';
};
