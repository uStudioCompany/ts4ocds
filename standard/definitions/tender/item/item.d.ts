/**
 * @packageDocumentation
 * @module Item
 */

import type { Classification } from './classification';
import type { Unit } from './unit';

/**
 * A good, service, or work to be contracted.
 */
export interface Item {
  /**
   * A local identifier to reference and merge the items by.
   * Must be unique within a given array of items.
   */
  id: string | number;
  /**
   * A description of the goods, services to be provided.
   */
  description?: string;
  /**
   * The primary classification for the item.
   */
  classification?: Classification;
  /**
   * An array of additional classifications for the item.
   */
  additionalClassifications?: Classification[];
  /**
   * The number of units to be provided.
   */
  quantity?: number;
  /**
   * A description of the unit in which the supplies, services or works are provided (e.g. hours, kilograms) and the unit-price.
   */
  unit?: Unit;
}
