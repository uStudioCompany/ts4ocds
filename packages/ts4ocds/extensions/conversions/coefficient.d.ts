/**
 * @packageDocumentation
 * @module Conversions
 */

import type { Period } from 'standard';

/**
 * A coefficient applied in case of the value of prescribed attribute matches
 */
export interface Coefficient {
  /**
   * An identifier for this coefficient.
   */
  id: string | number;
  /**
   * Value of related 'requirement' or one of available 'options' if applicable received through 'requirementResponse'
   */
  value?: number;
  /**
   * Indicative minimum value of related 'requirement' or one of available 'options'
   * if applicable received through 'requirementResponse'
   */
  minValue?: number;
  /**
   * Indicative maximum value of related 'requirement' or one of available 'options'
   * if applicable received through 'requirementResponse'
   */
  maxValue?: number;
  /**
   * Used to specify a particular period the conversion and its coefficients are applies to
   */
  period: Period;
  /**
   * Precise value that has to be applied for conversion in specific case
   */
  coefficient?: number;
  /**
   * Where mathematical formula is used to calculate precise value that has to be applied for conversion
   * in specific case this field must be populated with such formula
   */
  formula?: string;
}
