/**
 *  @packageDocumentation
 *  @module Lots
 */

import type { Lot } from '../lot';
import type { Award as MainAward } from 'packages/ts4ocds/standard';

export interface Award extends MainAward {
  /**
   * If this award relates to one or more specific lots, provide the identifier(s) of the related lot(s) here.
   */
  relatedLots?: Lot['id'][];
}
