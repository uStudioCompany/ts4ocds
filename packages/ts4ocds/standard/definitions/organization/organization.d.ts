/**
 * @packageDocumentation
 * @module Organization
 */

import type { Address } from './address';
import type { ContactPoint } from './contact-point';
import type { Identifier } from './identifier';

/**
 * A party (organization)
 */
export interface Organization<PartyDetails extends {} | null = null> {
  /**
   * A common name for this organization or other participant in the contracting process.
   * The identifier object provides a space for the formal legal name, and so this may either repeat that value,
   * or may provide the common name by which this organization or entity is known. This field may also include details
   * of the department or sub-unit involved in this contracting process.
   */
  name?: string;
  /**
   * The ID used for cross-referencing to this party from other sections of the release.
   * This field may be built with the following structure {identifier.scheme}-{identifier.id}(-{department-identifier}).
   */
  id: string;
  /**
   * The primary identifier for this organization or participant.
   * Identifiers that uniquely pick out a legal entity should be preferred.
   * Consult the [organization identifier guidance](https://standard.open-contracting.org/1.1/en/schema/identifiers/)
   * for the preferred scheme and identifier to use.
   */
  identifier: Identifier;
  /**
   * A list of additional / supplemental identifiers for the organization or participant,
   * using the [organization identifier guidance](https://standard.open-contracting.org/1.1/en/schema/identifiers/).
   * This can be used to provide an internally used identifier for this organization
   * in addition to the primary legal entity identifier.
   */
  additionalIdentifiers: Identifier[];
  /**
   * An address.
   * This may be the legally registered address of the organization, or may be a correspondence address
   * for this particular contracting process.
   */
  address: Address;
  /**
   * Contact details that can be used for this party.
   */
  contactPoint?: ContactPoint;
  /**
   * The party's role(s) in the contracting process,
   * using the open [partyRole](https://standard.open-contracting.org/1.1/en/schema/codelists/#party-role) codelist.
   */
  roles?: Role[];
  /**
   * Additional classification information about parties can be provided using partyDetail extensions
   * that define particular properties and classification schemes.
   */
  details?: PartyDetails;
}

/**
 * The party's role(s) in the contracting process,
 * using the open [partyRole](https://standard.open-contracting.org/1.1/en/schema/codelists/#party-role) codelist.
 */
export type Role =
  | 'buyer'
  | 'procuringEntity'
  | 'supplier'
  | 'tenderer'
  | 'funder'
  | 'enquirer'
  | 'payer'
  | 'payee'
  | 'reviewBody'
  | 'interestedParty'
  | string;
