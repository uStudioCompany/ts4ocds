/**
 * @packageDocumentation
 * @module Requirements
 */

import type { Award as MainAward } from 'standard';
import type { RequirementResponse } from '../requirement';

export interface Award extends MainAward {
  /**
   * A list of the detailed responses of this award to the requirements of the tender.
   */
  requirementResponses?: RequirementResponse[];
}
