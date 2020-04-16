/**
 * @packageDocumentation
 * @module Conversions
 */

import type { WithOptions } from './with-options';
import type { BaseRequirement } from '../../requirements';

export interface RequirementWithOptions extends BaseRequirement, WithOptions {}
