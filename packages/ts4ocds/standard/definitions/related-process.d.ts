/**
 * @packageDocumentation
 * @module RelatedProcess
 */

/**
 * A reference to a related contracting process: generally one preceding or following on from the current process.
 */
export interface RelatedProcess {
  /**
   * A local identifier for this relationship, unique within this array.
   */
  id: string;
  /**
   * The type of relationship,
   * using the open [relatedProcess](https://standard.open-contracting.org/1.1/en/schema/codelists/#related-process) codelist.
   */
  relationship?: Relationship[];
  /**
   * The title of the related process, where referencing an open contracting process,
   * this field should match the tender/title field in the related process.
   */
  title?: string;
  /**
   * The identification scheme used by this cross-reference,
   * using the open [relatedProcessScheme](https://standard.open-contracting.org/1.1/en/schema/codelists/#related-process-scheme) codelist.
   */
  scheme: 'ocid' | string;
  /**
   * The identifier of the related process.
   * If the scheme is 'ocid', this must be an Open Contracting ID (ocid).
   */
  identifier?: string;
  /**
   * A URI pointing to a machine-readable document, release or record package containing the identified related process.
   */
  uri?: string;
}

export type Relationship =
  | 'framework'
  | 'planning'
  | 'parent'
  | 'prior'
  | 'unsuccessfulProcess'
  | 'subContract'
  | 'replacementProcess'
  | 'renewalProcess'
  | string;
