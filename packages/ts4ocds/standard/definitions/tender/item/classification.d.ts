/**
 * @packageDocumentation
 * @module Item
 */

/**
 * A classification consists of at least two parts:
 * an identifier for the list (scheme) from which the classification is taken,
 * and an identifier for the category from that list being applied.
 * It is useful to also publish a text label and/or URI that users can draw on to interpret the classification.
 */
export interface Classification {
  /**
   * The scheme or codelist from which the classification code is taken.
   * For line item classifications,
   * this uses the open [itemClassificationScheme](https://standard.open-contracting.org/1.1/en/schema/codelists/#item-classification-scheme) codelist.
   */
  scheme?: ItemClassificationScheme;
  /**
   * The classification code taken from the scheme.
   */
  id?: string | number;
  /**
   * A textual description or title for the classification code.
   */
  description?: string;
  /**
   * A URI to uniquely identify the classification code.
   */
  uri?: string;
}

export type ItemClassificationScheme = 'CPV' | 'CPVS' | 'GSIN' | 'UNSPSC' | 'CPC' | 'OKDP' | 'OKPD' | 'CUCOP' | string;
