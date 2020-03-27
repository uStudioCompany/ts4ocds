/**
 * @packageDocumentation
 * @module Metrics
 */

import type { Award } from 'standard';
import type { Metric } from '../metric';

export interface AwardWithAgreedMetrics extends Award {
  /**
   * Any target metrics set out as part of the contract award.
   */
  agreedMetrics?: Metric[];
}
