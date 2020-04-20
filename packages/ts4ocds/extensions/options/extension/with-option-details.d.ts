/**
 * @packageDocumentation
 * @module Options
 */

import type { OptionDetailsWithCombine, OptionDetailsWithGroups } from '../option-details';

export interface WithOptionDetails {
  optionDetails: OptionDetailsWithCombine | OptionDetailsWithGroups;
}
