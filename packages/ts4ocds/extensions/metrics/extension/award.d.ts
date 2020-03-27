/**
 * @packageDocumentation
 * @module Metrics
 */

import type { Award as MainAward } from 'standard';
import type { Metric } from '../metric';

export interface Award extends MainAward {
  /**
   * Any target metrics set out as part of the contract award.
   */
  agreedMetrics?: Metric[];
}
