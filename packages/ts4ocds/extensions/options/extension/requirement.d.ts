/**
 * @packageDocumentation
 * @module Options
 */

import type { Requirement } from '../../requirements';
import type { WithOptionDetails } from './with-option-details';

export interface RequirementWithOptionDetails extends Requirement, WithOptionDetails {}
