/**
 * @packageDocumentation
 * @module Options
 */

import type { BaseObservation } from '../../metrics';
import type { WithOptionDetails } from './with-option-details';

export interface ObservationWithOptionDetails extends BaseObservation, WithOptionDetails {}
