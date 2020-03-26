/**
 * @packageDocumentation
 * @module Contract
 */

import type { Milestone } from '../planning';
import type { Document } from '../document';
import type { Transaction } from './transaction';

/**
 * Information during the performance / implementation stage of the contract.
 */
export interface Implementation {
  /**
   * A list of the spending transactions made against this contract
   */
  transactions: Transaction[];
  /**
   * As milestones are completed, the milestone's status and dates should be updated.
   */
  milestones: Milestone[];
  /**
   * Documents and reports that are part of the implementation phase e.g. audit and evaluation reports.
   */
  documents: Document[];
}
