/**
 * @packageDocumentation
 * @module Conversions
 */

import { WithOptions } from './with-options';
import type { Observation } from 'metrics';

export type ObservationWithOptions = Observation & WithOptions;
