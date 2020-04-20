/**
 * @packageDocumentation
 * @module Item
 */

import type { Value } from '../../value';

/**
 * A description of the unit in which the supplies, services or works are provided (e.g. hours, kilograms) and the unit-price.
 */
export interface Unit {
  /**
   * The list from which identifiers for units of measure are taken,
   * using the open [unitClassificationScheme](https://standard.open-contracting.org/1.1/en/schema/codelists/#unit-classification-scheme) codelist.
   * 'UNCEFACT' is recommended.
   */
  scheme?: UnitClassificationScheme;
  /**
   * The identifier from the codelist referenced in the scheme property.
   * Check the codelist for details of how to find and use identifiers from the scheme in use.
   */
  id?: string;
  /**
   * Name of the unit.
   */
  name?: string;
  /**
   * The monetary value of a single unit.
   */
  value?: Value;
  /**
   * The machine-readable URI for the unit of measure, provided by the scheme.
   */
  uri?: string;
}

/**
 * The list from which identifiers for units of measure are taken,
 * using the open [unitClassificationScheme](https://standard.open-contracting.org/1.1/en/schema/codelists/#unit-classification-scheme) codelist.
 * 'UNCEFACT' is recommended.
 */
export type UnitClassificationScheme = 'UNCEFACT' | 'QUDT' | string;
