/**
 *  @packageDocumentation
 *  @module Lots
 */

import type { Lot } from '../lot';
import type { Document as MainDocument } from 'standard';

export interface Document extends MainDocument {
  /**
   * If this document relates to a particular lot, provide the identifier(s) of the related lot(s) here.
   */
  relatedLots?: Lot['id'][];
}
