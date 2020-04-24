import { PeriodConstrained, PeriodInDays } from '../standard/definitions';
import { isConstrained, isInDays } from './standard';

const random = Math.random() <= 0.5;

describe('Period', () => {
  const periodInDays: PeriodInDays = {
    durationInDays: 1,
  };

  const periodConstrained: PeriodConstrained = {
    startDate: `${new Date().getDate()}`,
    endDate: `${new Date().getDate()}`,
  };

  describe('isInDays', () => {
    it('Should validate true against PeriodInDays', () => {
      expect(isInDays(periodInDays)).toBe(true);
    });

    it('Should validate false against PeriodConstrained', () => {
      expect(isInDays(periodConstrained)).toBe(false);
    });
  });

  describe('isConstrained', () => {
    it('Should validate true against PeriodConstrained', () => {
      expect(isConstrained(periodConstrained)).toBe(true);
    });

    it('Should validate false against PeriodInDays', () => {
      expect(isConstrained(periodInDays)).toBe(false);
    });
  });
});
