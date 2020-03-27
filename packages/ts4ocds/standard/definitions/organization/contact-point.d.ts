/**
 * @packageDocumentation
 * @module Organization
 */

/**
 * A person, contact point or department to contact in relation to this contracting process.
 */
export interface ContactPoint {
  /**
   * The name of the contact person, department, or contact point, for correspondence relating to this contracting process.
   */
  name?: string;
  /**
   * The e-mail address of the contact point/person.
   */
  email?: string;
  /**
   * The telephone number of the contact point/person. This should include the international dialing code.
   */
  telephone?: string;
  /**
   * The fax number of the contact point/person. This should include the international dialing code.
   */
  faxNumber?: string;
  /**
   * A web address for the contact point/person.
   */
  url?: string;
}
