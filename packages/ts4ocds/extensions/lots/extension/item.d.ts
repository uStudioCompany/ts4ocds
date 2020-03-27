/**
 *  @packageDocumentation
 *  @module Lots
 */

import type { Item } from 'standard';

export interface ItemWithRelatedLot extends Item {
  /**
   * If this item belongs to a lot, provide the identifier of the related lot here.
   * Each item may only belong to a single lot.
   */
  relatedLot?: string;
}
