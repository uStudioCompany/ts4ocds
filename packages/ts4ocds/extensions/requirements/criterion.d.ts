/**
 * @packageDocumentation
 * @module Requirements
 */

import type { RequirementGroup } from './requirement-group';

/**
 * A criterion on which either bidders or items will be judged, evaluated or assessed.
 */
export type Criterion = TendererCriterion | ItemCriterion;

interface BaseCriterion {
  /**
   * The identifier for this criterion.
   * It must be unique and cannot change within the Open Contracting Process it is part of (defined by a single ocid).
   * See the [identifier guidance](http://standard.open-contracting.org/latest/en/schema/identifiers/) for further details.
   */
  id: string | number;
  /**
   * A title for this criterion.
   */
  title?: string;
  /**
   * A description of this criterion.
   * Structured information should be provided in its other fields.
   */
  description?: string;
  /**
   * Source of response to the requirements specified in the criterion,
   * for example responses may be submitted by tenderers or by an assessment committee at the procuringEntity.
   */
  source?: 'tenderer' | 'buyer' | 'procuringEntity';
  /**
   * The schema element that the criterion judges, evaluates or assesses.
   * For example criterion may be defined against items or against bidders.
   */
  relatesTo?: 'tenderer' | 'item';
  /**
   * A list of requirement groups for this Criterion.
   * A criterion is satisfied by one or more requirement groups being met.
   * A requirement group is met when all requirements in the group are satisfied.
   */
  requirementGroups: RequirementGroup[];
}

interface TendererCriterion extends BaseCriterion {
  relatesTo: 'tenderer';
}

interface ItemCriterion extends BaseCriterion {
  relatesTo: 'item';
  /**
   * Where relatesTo = \"item\" this field must be populated with the id of the item in this tender section
   * which the criterion relates to. Where relatesTo <> \"item\" this field should be omitted.
   */
  relatedItem: string;
}
