/**
 *  @packageDocumentation
 *  @module Lots
 */

import type { WithRelatedLots } from './with-related-lots';
import type { Award } from 'standard';

/**
 * If this award relates to one or more specific lots, provide the identifier(s) of the related lot(s) here.
 */
export interface AwardWithRelatedLots extends Award, WithRelatedLots {}
