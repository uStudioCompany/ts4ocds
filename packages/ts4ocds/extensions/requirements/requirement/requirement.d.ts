/**
 * @packageDocumentation
 * @module Requirements
 */

import type { Period } from 'packages/ts4ocds/standard';
import type { DataType } from './data-type';

/**
 * An atomic requirement.
 * Requirements can specify the expected value that the response has to contain,
 * or a range of threshold values within which the response has to fit in.
 * The requirement may apply to a certain period of time.
 */
export type Requirement = StringRequirement | BooleanRequirement | NumberRequirement;

interface BaseRequirement {
  /**
   * The identifier for this requirement.
   * It must be unique and cannot change within the Open Contracting Process it is part of (defined by a single ocid).
   * See the [identifier guidance](http://standard.open-contracting.org/latest/en/schema/identifiers/) for further details.
   */
  id: string;
  /**
   * The title of this atomic requirement.
   */
  title?: string;
  /**
   * A free text description for this atomic requirement.
   */
  description?: string;
  /**
   * The data type in which the requirement response must be provided.
   */
  dataType?: DataType;
  /**
   * Used to state the requirement when the response must be particular value.
   */
  expectedValue?: string | number | boolean;
  /**
   * A regular expression against which validate the requirement response.
   */
  pattern?: string;
  /**
   * Used to specify a particular period the requirement applies to, for example the bidder's turnover in a given year.
   */
  period?: Period;
}

interface StringRequirement extends BaseRequirement {
  dataType?: 'string';
  expectedValue?: string;
}

interface BooleanRequirement extends BaseRequirement {
  dataType?: 'boolean';
  expectedValue?: boolean;
}

interface NumberRequirement extends BaseRequirement {
  dataType?: 'number' | 'integer';
  expectedValue?: number;
  /**
   * Used to state the lower bound of the requirement when the response must be within a certain range.
   */
  minValue?: number;
  /**
   * Used to state the upper bound of the requirement when the response must be within a certain range.
   */
  maxValue?: number;
}
