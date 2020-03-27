/**
 *  @packageDocumentation
 *  @module Lots
 */

import type { WithRelatedLots } from './with-related-lots';
import type { Milestone } from 'standard';

/**
 * If this milestone relates to one or more specific lots, provide the identifier(s) of the related lot(s) here.
 */
export interface MilestoneWithRelatedLots extends Milestone, WithRelatedLots {}
