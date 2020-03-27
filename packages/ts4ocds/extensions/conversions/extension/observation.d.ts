/**
 * @packageDocumentation
 * @module Conversions
 */

import type { WithOptions } from 'extensions/conversions/extension/with-options';
import type { Observation } from 'metrics';

export type ObservationWithOptions = Observation & WithOptions;
