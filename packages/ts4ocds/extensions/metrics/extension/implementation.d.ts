/**
 * @packageDocumentation
 * @module Metrics
 */

import type { Implementation } from '../../../standard';
import type { Metric } from '../metric';

export interface ImplementationWithMetrics extends Implementation {
  /**
   * Reported results from the delivery of the contracted goods, works or services.
   */
  metrics?: Metric[];
}
