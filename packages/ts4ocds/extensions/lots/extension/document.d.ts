/**
 *  @packageDocumentation
 *  @module Lots
 */

import type { WithRelatedLots } from './with-related-lots';
import type { Document } from '../../../standard';

/**
 * If this document relates to a particular lot, provide the identifier(s) of the related lot(s) here.
 */
export interface DocumentWithRelatedLots extends Document, WithRelatedLots {}
