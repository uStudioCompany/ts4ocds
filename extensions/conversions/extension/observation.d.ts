/**
 * @packageDocumentation
 * @module Conversions
 */

import type { Observation as MainObservation } from 'metrics';
import type { Option } from 'options';

export type Observation = MainObservation & { options?: Option[] };
