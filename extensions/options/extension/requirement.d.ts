/**
 * @packageDocumentation
 * @module Options
 */

import type { OptionDetails } from '../option-details';
import type { Requirement as MainRequirement } from 'requirements';

export type Requirement = MainRequirement & {
  optionDetails?: OptionDetails;
};
