/**
 * @packageDocumentation
 * @module Metrics
 */

import type { Observation } from './observation';

/**
 * Metrics are used to set out targets and results from a contracting process.
 * During the planning and tender sections, a metric indicates the anticipated results.
 * In award and contract sections it indicates the awarded/contracted results.
 * In the implementation section it is used to provide updates on actually delivered results, also known as outputs.
 */
export interface Metric {
  /**
   * An identifier for this metric.
   * In some cases this may be drawn from a codelist of metrics required for this type of contracting process,
   * or in other instances may be an arbitrary identifier.
   */
  id: string;
  /**
   * The title of this metric
   */
  title?: string;
  /**
   * A short description of the metric.
   * This may include short details of measurement methods.
   */
  description?: string;
  /**
   * An array of target or actual values for this metric.
   */
  observations: Observation[];
}
