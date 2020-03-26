/**
 * @packageDocumentation
 * @module Release
 */

/**
 * One or more values from the closed [releaseTag](https://standard.open-contracting.org/1.1/en/schema/codelists/#release-tag)
 * codelist. Tags can be used to filter releases and to understand the kind of information that releases might contain.
 */
export type ReleaseTag =
  | 'planning'
  | 'planningUpdate'
  | 'tender'
  | 'tenderAmendment'
  | 'tenderUpdate'
  | 'tenderCancellation'
  | 'award'
  | 'awardUpdate'
  | 'awardCancellation'
  | 'contract'
  | 'contractUpdate'
  | 'contractAmendment'
  | 'implementation'
  | 'implementationUpdate'
  | 'contractTermination'
  | 'compiled';
