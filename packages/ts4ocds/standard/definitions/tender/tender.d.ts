/**
 * @packageDocumentation
 * @module Tender
 */

/**
 * The current status of the tender,
 * from the closed [tenderStatus](https://standard.open-contracting.org/1.1/en/schema/codelists/#tender-status) codelist.
 */
export type TenderStatus = 'planning' | 'planned' | 'active' | 'cancelled' | 'unsuccessful' | 'complete' | 'withdrawn';
/**
 * The procurement method,
 * from the closed [method](https://standard.open-contracting.org/1.1/en/schema/codelists/#method) codelist.
 */
export type ProcurementMethod = 'open' | 'selective' | 'limited' | 'direct';
/**
 * The primary category describing the main object of this contracting process,
 * from the closed [procurementCategory](https://standard.open-contracting.org/1.1/en/schema/codelists/#procurement-category) codelist.
 */
export type MainProcurementCategory = 'goods' | 'works' | 'services';
/**
 * Any additional categories describing the objects of this contracting process,
 * using the open [extendedProcurementCategory](https://standard.open-contracting.org/1.1/en/schema/codelists/#extended-procurement-category) codelist.
 */
export type AdditionalProcurementCategory = (MainProcurementCategory & 'consultingServices') | string;
/**
 * The award criteria for the procurement,
 * using the open [awardCriteria](https://standard.open-contracting.org/1.1/en/schema/codelists/#award-criteria) codelist.
 */
export type AwardCriteria =
  | 'priceOnly'
  | 'costOnly'
  | 'qualityOnly'
  | 'ratedCriteria'
  | 'lowestCost'
  | 'bestProposal'
  | 'bestValueToGovernment'
  | 'singleBidOnly'
  | string;
/**
 * The methods by which bids are submitted,
 * using the open [submissionMethod](https://standard.open-contracting.org/1.1/en/schema/codelists/#submission-method) codelist.
 */
export type SubmissionMethod = 'electronicSubmission' | 'electronicAuction' | 'written' | 'inPerson' | string;
