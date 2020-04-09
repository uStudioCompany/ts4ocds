/**
 * @packageDocumentation
 * @module Planning
 */

/**
 * The milestone block can be used to represent a wide variety of events in the lifetime of a contracting process."
 */
export interface Milestone {
  /**
   * A local identifier for this milestone, unique within this block.
   * This field is used to keep track of multiple revisions of a milestone through the compilation from release to record mechanism.
   */
  id: string | number;
  /**
   * Milestone title
   */
  title?: string;
  /**
   * The nature of the milestone,
   * using the open [milestoneType](https://standard.open-contracting.org/1.1/en/schema/codelists/#milestone-type) codelist.
   */
  type?: MilestoneType;
  /**
   * A description of the milestone.
   */
  description?: string;
  /**
   * Milestone codes can be used to track specific events that take place for a particular kind of contracting process.
   * For example, a code of 'approvalLetter' can be used to allow applications to understand this milestone
   * represents the date an approvalLetter is due or signed.
   */
  code?: string;
  /**
   * The date the milestone is due.
   */
  dueDate?: string;
  /**
   * The date on which the milestone was met.
   */
  dateMet?: string;
  /**
   * The date the milestone was last reviewed or modified and the status was altered or confirmed to still be correct.
   */
  dateModified?: string;
  /**
   * The status that was realized on the date provided in `dateModified`,
   * from the closed [milestoneStatus](https://standard.open-contracting.org/1.1/en/schema/codelists/#milestone-status) codelist.
   */
  status?: MilestoneStatus;
}

/**
 * The nature of the milestone,
 * using the open [milestoneType](https://standard.open-contracting.org/1.1/en/schema/codelists/#milestone-type) codelist.
 */
export type MilestoneType =
  | 'preProcurement'
  | 'approval'
  | 'engagement'
  | 'assessment'
  | 'delivery'
  | 'reporting'
  | 'financing'
  | string;

/**
 * The status that was realized on the date provided in `dateModified`,
 * from the closed [milestoneStatus](https://standard.open-contracting.org/1.1/en/schema/codelists/#milestone-status) codelist.
 */
export type MilestoneStatus = 'scheduled' | 'met' | 'notMet' | 'partiallyMet';
