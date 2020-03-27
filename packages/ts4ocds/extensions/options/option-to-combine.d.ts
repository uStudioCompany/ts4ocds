/**
 * @packageDocumentation
 * @module Options
 */

import type { Option } from './option';

/**
 * Whether buyer reserves the right to combine options a 'Option to combine' is used to capture this information
 */
export interface OptionToCombine {
  /**
   * An identifier for this OptionToCombine
   */
  id: string | number;
  /**
   * A number of options related to this OptionToCombine
   */
  relatedOptions: Option['id'][];
}
