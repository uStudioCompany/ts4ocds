/**
 * @packageDocumentation
 * @module Conversions
 */

import type { Coefficient } from './coefficient';

/**
 * Conversion is used to describe conversions and its coefficients applicable
 * for specific value received for requirement or observation
 */
export type Conversion = RelatedConversion | UnrelatedConversion;

interface BaseConversion {
  /**
   * An identifier for this conversion.
   */
  id: string | number;
  /**
   * The free-text rationale of using of this conversion
   */
  rationale?: string;
  /**
   * Free text description of this conversion could be shared here
   */
  description?: string;
  /**
   * A list of applicable coefficients for this conversion
   */
  coefficients: Coefficient[];
}

export interface RelatedConversion extends BaseConversion {
  /**
   * The schema element that the conversion applies.
   * For example, the conversion may be defined against a requirement or against a metric.
   */
  relatesTo: 'requirement' | 'observation';
  /**
   * Where 'relatesTo' is not empty this field must be populated with the id of the item in this tender section
   * which the conversion relates to.
   */
  relatedItem: string;
}

export interface UnrelatedConversion extends BaseConversion {
  /**
   * The schema element that the conversion applies.
   * For example, the conversion may be defined against a requirement or against a metric.
   */
  relatesTo?: never;
  /**
   * Where 'relatesTo' is not empty this field must be populated with the id of the item in this tender section
   * which the conversion relates to.
   */
  relatedItem?: never;
}
