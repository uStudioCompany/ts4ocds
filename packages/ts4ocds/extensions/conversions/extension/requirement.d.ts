/**
 * @packageDocumentation
 * @module Conversions
 */

import type { WithOptions } from 'extensions/conversions/extension/with-options';
import type { BaseRequirement } from 'requirements';

export interface RequirementWithOptions extends BaseRequirement, WithOptions {}
