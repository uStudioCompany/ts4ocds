/**
 * @packageDocumentation
 * @module Options
 */

import type { Lot } from '../../lots';
import type { WithOptionDetails } from './with-option-details';

export interface LotWithOptionDetails extends Lot, WithOptionDetails {}
