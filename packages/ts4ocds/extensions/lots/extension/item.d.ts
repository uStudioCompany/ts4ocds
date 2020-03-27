/**
 *  @packageDocumentation
 *  @module Lots
 */

import type { Item } from 'standard';

/**
 * If this item belongs to a lot, provide the identifier of the related lot here.
 * Each item may only belong to a single lot.
 */
export type ItemWithRelatedLot = Item & WithRelatedLot;

interface WithRelatedLot {
  relatedLot?: string;
}
