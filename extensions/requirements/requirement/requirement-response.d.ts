/**
 * @packageDocumentation
 * @module Requirements
 */

import type { OrganizationReference, Period } from 'standard';
import type { DataType } from './data-type';
import type { RequirementReference } from './requirement-reference';

/**
 * An assertion that responds to a single requirement.
 * A requirement response provides the value for the requirement and may provide the period to which it applies.
 */
export type RequirementResponse<DT extends DataType = undefined> = DT extends 'string'
  ? StringRequirementResponse
  : DT extends 'boolean'
  ? BooleanRequirementResponse
  : DT extends undefined
  ? BaseRequirementResponse
  : NumberRequirementResponse;

interface BaseRequirementResponse {
  /**
   * The identifier for this requirement response.
   * It must be unique and cannot change within the Open Contracting Process it is part of (defined by a single ocid).
   * See the [identifier guidance](http://standard.open-contracting.org/latest/en/schema/identifiers/) for further details.
   */
  id: string;
  /**
   * A title for this requirement response.
   */
  title?: string;
  /**
   * A description of this requirement response.
   * Structured information should be provided in its other fields.
   */
  description?: string;
  /**
   * The value of this requirement response. The value must be of the type defined in the requirement.dataType field.
   */
  value?: string | number | boolean;
  /**
   * The period which the requirement response is applicable to.
   */
  period?: Period;
  /**
   * The id and title of the requirement which the response is applicable to.
   */
  requirement: RequirementReference;
  /**
   * Where this requirement response relates to a tenderer and is provided by the buyer or procuring entity
   * this field should be used to reference the entry in the parties section for the tenderer the response relates to.
   */
  relatedTenderer?: OrganizationReference;
}

interface StringRequirementResponse extends BaseRequirementResponse {
  value?: string;
}

interface NumberRequirementResponse extends BaseRequirementResponse {
  value?: number;
}

interface BooleanRequirementResponse extends BaseRequirementResponse {
  value?: boolean;
}
