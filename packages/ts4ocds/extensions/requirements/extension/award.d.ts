/**
 * @packageDocumentation
 * @module Requirements
 */

import type { Award } from '../../../standard';
import type { RequirementResponse } from '../requirement';

export interface AwardWithRequirementResponses extends Award {
  /**
   * A list of the detailed responses of this award to the requirements of the tender.
   */
  requirementResponses?: RequirementResponse[];
}
