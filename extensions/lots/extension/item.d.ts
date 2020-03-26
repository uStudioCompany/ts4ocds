/**
 *  @packageDocumentation
 *  @module Lots
 */

import type { Lot } from '../lot';
import type { Item as MainItem } from 'standard';

export interface Item extends MainItem {
  /**
   * If this item belongs to a lot, provide the identifier of the related lot here.
   * Each item may only belong to a single lot.
   */
  relatedLot?: Lot['id'];
}
