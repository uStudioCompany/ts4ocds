/**
 * @packageDocumentation
 * @module Metrics
 */

import type { Period, Value, Unit } from 'standard';
import type { MilestoneReference } from './milestone-reference';

/**
 * An actual or target observation.
 * Observations should include either a value (for financial metrics) or measure (for other metrics).
 */
export type Observation = FinancialObservation | NonFinancialObservation;

interface BaseObservation {
  /**
   * A local identifier for this specific observation.
   * This may be an arbitrary identifier, or could be a composite of the metric identifier, and the date
   * and other dimensions of this observation.
   */
  id: string;
  /**
   * The period over which this observation is measured.
   */
  period?: Period;
  /**
   * Unit
   */
  unit: Unit;
  /**
   * Any number of dimensions can be recorded within this object.
   * Dimensions names should follow the camelCase conventions of OCDS.
   */
  dimensions: { [dimension: string]: string };
  /**
   * Any notes on this observation.
   * This may include clarifying information.
   */
  notes?: string;
  /**
   * A link to the milestone in the implementation section of OCDS to which this forecast,
   * target or actual observation relates.
   */
  relatedImplementationMilestone?: MilestoneReference;
}

interface FinancialObservation extends BaseObservation {
  /**
   * For financial metrics, the value of this forecast, target or actual observation.
   */
  value: Value;
}

interface NonFinancialObservation extends BaseObservation {
  /**
   * For non-financial metrics, the measure of this forecast, target or actual observation.
   * Measures may be provided as free text or numerical values.
   */
  measure?: string | number;
}
