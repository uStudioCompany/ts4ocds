/**
 * @packageDocumentation
 * @module Conversions
 */

import type { WithOptions } from './with-options';
import type { Observation } from '../../metrics';

export interface ObservationWithOptions extends Observation, WithOptions {}
