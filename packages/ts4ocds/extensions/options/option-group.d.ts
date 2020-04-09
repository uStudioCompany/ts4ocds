/**
 * @packageDocumentation
 * @module Options
 */

import type { Option } from './option';

/**
 * An option group is a set of options that may be applied by Procuring Entity for specific property
 */
export interface OptionGroup {
  /**
   * An identifier for this group
   */
  id: string | number;
  /**
   * Free-text description for this group
   */
  description?: string;
  /**
   * Options available for this 'optionGroup'
   */
  options: Option[];
  /**
   * The scheme element that the group applies
   */
  relatesTo: OptionGroupRelatesTo;
}

/**
 * The scheme element that the group applies
 */
export type OptionGroupRelatesTo =
  | 'placeOfPerformance'
  | 'contractPeriod'
  | 'minValue'
  | 'maxValue'
  | 'period'
  | 'value'
  | 'measure'
  | 'unit'
  | string;
