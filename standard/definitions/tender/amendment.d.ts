/**
 * @packageDocumentation
 * @module Tender
 */

/**
 * Amendment information
 */
export interface Amendment {
  /**
   * The date of this amendment.
   */
  date?: string;
  /**
   * An explanation for the amendment.
   */
  rationale?: string;
  /**
   * An identifier for this amendment: often the amendment number
   */
  id?: string;
  /**
   * A free text, or semi-structured, description of the changes made in this amendment.
   */
  description?: string;
  /**
   * Provide the identifier (release.id) of the OCDS release (from this contracting process)
   * that provides the values for this contracting process **before** the amendment was made.
   */
  amendsReleaseID?: string;
  /**
   * Provide the identifier (release.id) of the OCDS release (from this contracting process)
   * that provides the values for this contracting process **after** the amendment was made.
   */
  releaseID?: string;
}
