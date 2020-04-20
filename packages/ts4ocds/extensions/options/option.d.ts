/**
 * @packageDocumentation
 * @module Options
 */

import type { Observation } from '../metrics';
import type { Address, Period, Unit } from '../../standard';

/**
 * Available prescribed option for requirement/observation that can be set as a value for bid.requirementResponse/award.
 */
export interface Option {
  /**
   * An identifier for this option.
   */
  id: string | number;
  /**
   * Title for this option
   */
  title?: string;
  /**
   * Free-text description for this option
   */
  description?: string;
  /**
   * Value provided by this option
   */
  value: string | number;
  minValue?: number;
  maxValue?: number;
  unit?: Unit;
  period?: Period;
  measure?: string | number;
  dimensions?: Observation['dimensions'];
  placeOfPerformance?: Address;
}
