/**
 * @packageDocumentation
 * @module Options
 */

import type { OptionGroup } from './option-group';
import type { OptionToCombine } from './option-to-combine';

/**
 * Where options are applied 'Option Details' is used to capture this information
 */
export interface OptionDetailsWithGroups {
  /**
   * A list of option groups for this element
   */
  optionGroups: OptionGroup[];
}

/**
 * Where options are applied 'Option Details' is used to capture this information
 */
export interface OptionDetailsWithCombine {
  /**
   * Where buyer reserves the right to combine options a 'Option to combine' is used to capture this information
   */
  optionsToCombine: OptionToCombine[];
}
