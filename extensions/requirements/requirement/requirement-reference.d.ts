/**
 * @packageDocumentation
 * @module Requirements
 */

/**
 * Used to cross reference a requirement.
 */
export interface RequirementReference {
  /**
   * The id of the requirement which the response is applicable to.
   */
  id: string;
  /**
   * The title of the requirement which the response is applicable to.
   */
  title?: string;
}
