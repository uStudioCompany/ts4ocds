/**
 * @packageDocumentation
 * @module Contract
 */

/**
 * The current status of the contract,
 * from the closed [contractStatus](https://standard.open-contracting.org/1.1/en/schema/codelists/#contract-status) codelist.
 */
export type ContractStatus = 'pending' | 'active' | 'cancelled' | 'terminated';
