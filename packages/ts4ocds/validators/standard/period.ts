import { Period, PeriodConstrained, PeriodInDays } from '../../standard/definitions';

export const isInDays = (period: Period): period is PeriodInDays => 'durationInDays' in period;

export const isConstrained = (period: Period): period is PeriodConstrained => {
  return 'startDate' in period && 'endDate' in period;
};
