/**
 * @packageDocumentation
 * @module Metrics
 */

import type { Implementation as MainImplementation } from 'packages/ts4ocds/standard';
import type { Metric } from '../metric';

export interface Implementation extends MainImplementation {
  /**
   * Reported results from the delivery of the contracted goods, works or services.
   */
  metrics?: Metric[];
}