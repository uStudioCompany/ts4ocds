import { OptionDetailsWithCombine, OptionDetailsWithGroups } from '../../extensions/options';
import { WithOptionDetails } from '../../extensions/options/extension/with-option-details';

export const hasOptionGroups = (entity: WithOptionDetails): entity is { optionDetails: OptionDetailsWithGroups } => {
  return 'optionGroups' in entity.optionDetails;
};

export const hasOptionsToCombine = (
  entity: WithOptionDetails
): entity is { optionDetails: OptionDetailsWithCombine } => {
  return 'optionsToCombine' in entity.optionDetails;
};
