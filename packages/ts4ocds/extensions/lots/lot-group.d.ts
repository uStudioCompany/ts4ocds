/**
 *  @packageDocumentation
 *  @module Lots
 */

import type { Value } from 'standard';

/**
 * Where the buyer reserves the right to combine lots, or wishes to specify the total value for a group of lots,
 * a lot group is used to capture this information.
 */
export interface LotGroup {
  /**
   * A local identifier for this group of lots.
   */
  id: string;
  /**
   * A list of the identifiers of the lots that form this group.
   * Lots may appear in more than one group.
   */
  relatedLots?: string[];
  /**
   * The buyer reserves the right to combine the lots in this group when awarding a contract.
   */
  optionsToCombine?: boolean;
  /**
   * The maximum estimated value of the lots in this group.
   * This may be lower than the sum total of lot values
   */
  maximumValue: Value;
}
