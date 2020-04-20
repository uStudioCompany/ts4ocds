/**
 * @packageDocumentation
 * @module Period
 */

/**
 * Key events during a contracting process may have a known start date, end date, duration,
 * or maximum extent (the latest date the period can extend to).
 * In some cases, not all of these fields will have known or relevant values.
 */
export interface Period {
  /**
   * The maximum duration of this period in days.
   * A user interface can collect or display this data in months or years as appropriate,
   * and then convert it into days when storing this field.
   * This field can be used when exact dates are not known.
   * If a startDate and endDate are set, this field, if used, should be equal to the difference between startDate and endDate.
   * Otherwise, if a startDate and maxExtentDate are set, this field, if used,
   * should be equal to the difference between startDate and maxExtentDate.
   */
  durationInDays?: number;
  /**
   * The start date for the period.
   * When known, a precise start date must be provided.
   */
  startDate?: string;
  /**
   * The end date for the period.
   * When known, a precise end date must be provided.
   */
  endDate?: string;
  /**
   * The period cannot be extended beyond this date.
   * This field can be used to express the maximum available date for extension or renewal of this period.
   */
  maxExtentDate?: string;
}

/**
 * Key events during a contracting process may have a known start date, end date, duration,
 * or maximum extent (the latest date the period can extend to).
 * In some cases, not all of these fields will have known or relevant values.
 */
export interface PeriodInDays extends Period {
  /**
   * The start date for the period.
   * When known, a precise start date must be provided.
   */
  startDate?: never;
  /**
   * The end date for the period.
   * When known, a precise start date must be provided.
   */
  endDate?: never;
  /**
   * The period cannot be extended beyond this date.
   * This field can be used to express the maximum available date for extension or renewal of this period.
   */
  durationInDays: number;
}

/**
 * Key events during a contracting process may have a known start date, end date, duration,
 * or maximum extent (the latest date the period can extend to).
 * In some cases, not all of these fields will have known or relevant values.
 */
export interface PeriodConstrained extends Period {
  /**
   * The start date for the period.
   * When known, a precise start date must be provided.
   */
  startDate: string;
  /**
   * The end date for the period.
   * When known, a precise start date must be provided.
   */
  endDate: string;
  /**
   * The period cannot be extended beyond this date.
   * This field can be used to express the maximum available date for extension or renewal of this period.
   */
  durationInDays?: number;
}
