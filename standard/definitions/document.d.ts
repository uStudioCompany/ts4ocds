/**
 * @packageDocumentation
 * @module Document
 */

/**
 * Links to, or descriptions of, external documents can be attached at various locations within the standard.
 * Documents can be supporting information, formal notices, downloadable forms,
 * or any other kind of resource that ought to be made public as part of full open contracting.
 */
export interface Document {
  /**
   * A local, unique identifier for this document.
   * This field is used to keep track of multiple revisions of a document through the compilation from release to record mechanism.
   */
  id: string | number;
  /**
   * A classification of the document described,
   * using the open [documentType](https://standard.open-contracting.org/1.1/en/schema/codelists/#document-type) codelist.
   */
  documentType?: DocumentType;
  /**
   * The document title.
   */
  title?: string;
  /**
   * A short description of the document.
   * Descriptions are recommended to not exceed 250 words.
   * In the event the document is not accessible online,
   * the description field can be used to describe arrangements for obtaining a copy of the document.
   */
  description?: string;
  /**
   * A direct link to the document or attachment.
   * The server providing access to this document ought to be configured to correctly report the document mime type.
   */
  url?: string;
  /**
   * The date on which the document was first published.
   * This is particularly important for legally important documents such as notices of a tender.
   */
  datePublished?: string;
  /**
   * Date that the document was last modified
   */
  dateModified?: string;
  /**
   * The format of the document, using the open [IANA Media Types](http://www.iana.org/assignments/media-types/) codelist
   * (see the values in the 'Template' column), or using the 'offline/print' code if the described document is published offline.
   * For example, web pages have a format of 'text/html'.
   */
  format?: string;
  /**
   * The language of the linked document using either two-letter [ISO639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes),
   * or extended [BCP47 language tags](http://www.w3.org/International/articles/language-tags/).
   * The use of lowercase two-letter codes from [ISO639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)
   * is recommended unless there is a clear user need for distinguishing the language subtype.
   */
  language?: string;
}

export type DocumentType =
  | 'plannedProcurementNotice'
  | 'tenderNotice'
  | 'awardNotice'
  | 'contractNotice'
  | 'completionCertificate'
  | 'procurementPlan'
  | 'biddingDocuments'
  | 'technicalSpecifications'
  | 'evaluationCriteria'
  | 'evaluationReports'
  | 'contractDraft'
  | 'contractSigned'
  | 'contractArrangements'
  | 'contractSchedule'
  | 'physicalProgressReport'
  | 'financialProgressReport'
  | 'finalAudit'
  | 'hearingNotice'
  | 'marketStudies'
  | 'eligibilityCriteria'
  | 'clarifications'
  | 'shortlistedFirms'
  | 'environmentalImpact'
  | 'assetAndLiabilityAssessment'
  | 'riskProvisions'
  | 'winningBid'
  | 'complaints'
  | 'contractAnnexe'
  | 'contractGuarantees'
  | 'subContract'
  | 'needsAssessment'
  | 'feasibilityStudy'
  | 'projectPlan'
  | 'billOfQuantity'
  | 'bidders'
  | 'conflictOfInterest'
  | 'debarments'
  | 'illustration'
  | 'submissionDocuments'
  | 'contractSummary'
  | 'cancellationDetails'
  | string;
