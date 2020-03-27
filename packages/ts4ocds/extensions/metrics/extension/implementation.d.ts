/**
 * @packageDocumentation
 * @module Metrics
 */

import type { Implementation } from 'standard';
import type { Metric } from '../metric';

export type ImplementationWithMetrics = Implementation & WithMetrics;

interface WithMetrics {
  /**
   * Reported results from the delivery of the contracted goods, works or services.
   */
  metrics?: Metric[];
}
