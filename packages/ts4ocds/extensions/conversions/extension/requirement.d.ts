/**
 * @packageDocumentation
 * @module Conversions
 */

import type { Requirement as MainRequirement } from 'requirements';
import type { Option } from 'options';

export type Requirement = MainRequirement & { options?: Option[] };
