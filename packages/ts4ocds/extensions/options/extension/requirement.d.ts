/**
 * @packageDocumentation
 * @module Options
 */

import type { BaseRequirement } from '../../requirements';
import type { WithOptionDetails } from './with-option-details';

export interface RequirementWithOptionDetails extends BaseRequirement, WithOptionDetails {}
