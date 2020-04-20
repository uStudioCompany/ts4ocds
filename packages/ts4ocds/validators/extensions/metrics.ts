import { FinancialObservation, NonFinancialObservation, Observation } from '../../extensions/metrics';

export const isFinancial = (observation: Observation): observation is FinancialObservation => {
  return 'value' in observation;
};

export const isNonFinancial = (observation: Observation): observation is NonFinancialObservation => {
  return 'measure' in observation;
};
