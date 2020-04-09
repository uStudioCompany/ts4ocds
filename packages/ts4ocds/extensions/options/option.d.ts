/**
 * @packageDocumentation
 * @module Options
 */

import type { Observation } from 'metrics';
import type { OptionGroupRelatesTo } from './option-group';
import type { Address, Period, Unit } from 'standard';

/**
 * Available prescribed option for requirement/observation that can be set as a value for bid.requirementResponse/award.
 */
export type Option<RelatesTo extends OptionGroupRelatesTo = string> = BaseOption &
  (RelatesTo extends 'unit'
    ? { unit?: Unit }
    : RelatesTo extends 'contractPeriod'
    ? { period: Period }
    : RelatesTo extends 'measure'
    ? { measure?: string | number }
    : RelatesTo extends 'dimensions'
    ? { dimensions?: Observation['dimensions'] }
    : RelatesTo extends 'value'
    ? { value?: number }
    : RelatesTo extends 'minValue'
    ? { minValue?: number }
    : RelatesTo extends 'maxValue'
    ? { maxValue?: number }
    : RelatesTo extends 'placeOfPerformance'
    ? { placeOfPerformance?: Address }
    : {});

/**
 * Available prescribed option for requirement/observation that can be set as a value for bid.requirementResponse/award.
 */
export interface BaseOption {
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
}
