/**
 *  @packageDocumentation
 *  @module Lots
 */

import type { Lot } from '../lot';
import type { Milestone as MainMilestone } from 'packages/ts4ocds/standard';

export interface Milestone extends MainMilestone {
  /**
   * If this milestone relates to one or more specific lots, provide the identifier(s) of the related lot(s) here.
   */
  relatedLots?: Lot['id'][];
}
