/**
 *  @packageDocumentation
 *  @module Lots
 */

import type { Value, TenderStatus } from 'standard';

/**
 * A lot is a grouping of items within a tender that can be bid on or awarded together.
 */
export interface Lot {
  /**
   * A local identifier for this lot, such as a lot number.
   * This is used in relatedLots references at the item, document and award level.
   */
  id: string;
  /**
   * A title for this lot.
   */
  title?: string;
  /**
   * A description of this lot.
   */
  description?: string;
  /**
   * The current status of the process related to this lot
   * based on the [tenderStatus codelist](http://standard.open-contracting.org/1.1/en/schema/codelists/#tender-status)
   */
  status?: LotStatus;
  /**
   * The maximum estimated value of this lot.
   */
  value: Value;
}

export type LotStatus = TenderStatus;
