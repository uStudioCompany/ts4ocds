/**
 * @packageDocumentation
 * @module Conversions
 */

import type { WithOptions } from 'extensions/conversions/extension/with-options';
import type { BaseObservation } from 'metrics';

export interface ObservationWithOptions extends BaseObservation, WithOptions {}
