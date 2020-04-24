import { Conversion, UnrelatedConversion } from '../extensions/conversions';
import { PeriodConstrained, PeriodInDays } from '../standard/definitions';
import { isRelated } from './extensions';
import { isConstrained, isInDays } from './standard';

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

describe('Conversions', () => {
  const conversion: Partial<Conversion> = {
    relatesTo: 'requirement',
    relatedItem: '',
  };

  const unrelatedConversion: Partial<UnrelatedConversion> = {};

  describe('isRelated', () => {
    it('Should validate true against RelatedConversion', () => {
      expect(isRelated(conversion as Conversion)).toBe(true);

      expect(isRelated(unrelatedConversion as Conversion)).toBe(false);
    });
  });
});

