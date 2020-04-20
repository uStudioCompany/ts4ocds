/**
 * @packageDocumentation
 * @module Options
 */

import type { Observation } from '../../metrics';
import type { WithOptionDetails } from './with-option-details';

export interface ObservationWithOptionDetails extends Observation, WithOptionDetails {}
