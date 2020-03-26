/**
 * @packageDocumentation
 * @module Organization
 */

/**
 * An address.
 */
export interface Address {
  /**
   * The street address. For example, 1600 Amphitheatre Pkwy.
   */
  streetAddress?: string;
  /**
   * The locality. For example, Mountain View.
   */
  locality?: string;
  /**
   * The region. For example, CA.
   */
  region?: string;
  /**
   * The postal code. For example, 94043.
   */
  postalCode?: string;
  /**
   * The country name. For example, United States.
   */
  countryName?: string;
}
