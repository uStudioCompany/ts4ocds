/**
 * @packageDocumentation
 * @module Award
 */

import type { Period } from './period';
import type { Value } from './value';
import type { OrganizationReference } from './organization';
import type { Document } from './document';
import type { Amendment, Item } from './tender';

/**
 * An award for the given procurement.
 * There can be more than one award per contracting process e.g. because the contract is split among different providers,
 * or because it is a standing offer.
 */
export interface Award {
  /**
   * The identifier for this award.
   * It must be unique and must not change within the Open Contracting Process it is part of (defined by a single ocid).
   * See the [identifier guidance](https://standard.open-contracting.org/1.1/en/schema/identifiers/) for further details.
   */
  id: string | number;
  /**
   * Award title
   */
  title?: string;
  /**
   * Award description
   */
  description?: string;
  /**
   * The current status of the award,
   * from the closed [awardStatus](https://standard.open-contracting.org/1.1/en/schema/codelists/#award-status) codelist.
   */
  status?: AwardStatus;
  /**
   * The date of the contract award.
   * This is usually the date on which a decision to award was made.
   */
  date?: string;
  /**
   * The total value of this award.
   * In the case of a framework contract this may be the total estimated lifetime value, or maximum value, of the agreement.
   * There may be more than one award per procurement. A negative value indicates that the award may involve payments
   * from the supplier to the buyer (commonly used in concession contracts).
   */
  value?: Value;
  /**
   * The suppliers awarded this award.
   * If different suppliers have been awarded different items or values, these should be split into separate award blocks.
   */
  suppliers: OrganizationReference[];
  /**
   * The goods and services awarded in this award, broken into line items wherever possible.
   * Items should not be duplicated, but the quantity specified instead.
   */
  items: Item[];
  /**
   * The period for which the contract has been awarded.
   */
  contractPeriod: Period;
  /**
   * All documents and attachments related to the award, including any notices.
   */
  documents: Document[];
  /**
   * An award amendment is a formal change to the details of the award,
   * and generally involves the publication of a new award notice/release.
   * The rationale and a description of the changes made can be provided here.
   */
  amendments: Amendment[];
}

export type AwardStatus = 'pending' | 'active' | 'cancelled' | 'unsuccessful';
