/**
 * @packageDocumentation
 * @module Contract
 */

import type { OrganizationReference } from '../organization';
import type { Value } from '../value';

/**
 * A spending transaction related to the contracting process.
 * Draws upon the data models of the [Fiscal Data Package](https://frictionlessdata.io/specs/fiscal-data-package/)
 * and the [International Aid Transparency Initiative](http://iatistandard.org/activity-standard/iati-activities/iati-activity/transaction/)
 * and should be used to cross-reference to more detailed information held using a Fiscal Data Package, IATI file,
 * or to provide enough information to allow a user to manually or automatically cross-reference with some other
 * published source of transactional spending data.
 */
export interface Transaction {
  /**
   * A unique identifier for this transaction.
   * This identifier should be possible to cross-reference against the provided data source. For IATI this is the transaction reference.
   */
  id: string | number;
  /**
   * Used to point either to a corresponding Fiscal Data Package, IATI file,
   * or machine or human-readable source where users can find further information on the budget line item identifiers,
   * or project identifiers, provided here.
   */
  source?: string;
  /**
   * The date of the transaction
   */
  date?: string;
  /**
   * The value of the transaction.
   */
  value: Value;
  /**
   * An organization reference for the organization from which the funds in this transaction originate.
   */
  payer: OrganizationReference;
  /**
   * An organization reference for the organization which receives the funds in this transaction.
   */
  payee: OrganizationReference;
  /**
   * A URI pointing directly to a machine-readable record about this spending transaction.
   */
  uri?: string;
}
