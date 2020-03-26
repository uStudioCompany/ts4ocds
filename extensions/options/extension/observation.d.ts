/**
 * @packageDocumentation
 * @module Options
 */

import type { Observation as MainObservation } from 'metrics';
import type { OptionDetails } from '../option-details';

export type Observation = MainObservation & {
  optionDetails?: OptionDetails;
};
