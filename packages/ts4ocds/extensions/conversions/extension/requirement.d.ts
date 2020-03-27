/**
 * @packageDocumentation
 * @module Conversions
 */

import type { WithOptions } from 'extensions/conversions/extension/with-options';
import type { Requirement } from 'requirements';

export interface RequirementWithOptions extends Requirement, WithOptions {}
