import { Conversion, UnrelatedConversion } from '../extensions/conversions';
import { FinancialObservation, NonFinancialObservation, Observation } from '../extensions/metrics';
import { WithOptionDetails } from '../extensions/options/extension/with-option-details';
import {
  BooleanRequirement,
  Criterion,
  ItemCriterion,
  NumberRequirement,
  Requirement,
  StringRequirement,
  TendererCriterion,
} from '../extensions/requirements';
import { PeriodConstrained, PeriodInDays } from '../standard/definitions';

import {
  hasOptionGroups,
  hasOptionsToCombine,
  isFinancial,
  isNonFinancial,
  isOfTypeBoolean,
  isOfTypeNumber,
  isOfTypeString,
  isRelated,
  isRelatedToItem,
  isRelatedToTenderer,
} from './extensions';
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
    it('Should validate against PeriodInDays', () => {
      expect(isInDays(periodInDays)).toBe(true);
    });

    it('Should not validate against PeriodConstrained', () => {
      expect(isInDays(periodConstrained)).toBe(false);
    });
  });

  describe('isConstrained', () => {
    it('Should validate against PeriodConstrained', () => {
      expect(isConstrained(periodConstrained)).toBe(true);
    });

    it('Should not validate against PeriodInDays', () => {
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
    it('Should validate against RelatedConversion', () => {
      expect(isRelated(conversion as Conversion)).toBe(true);
    });

    it('Should not validate against UnrelatedConversion', () => {
      expect(isRelated(unrelatedConversion as Conversion)).toBe(false);
    });
  });
});

describe('Metrics', () => {
  const financialObservation: Partial<FinancialObservation> = {
    value: {},
  };

  const nonFinancialObservation: Partial<NonFinancialObservation> = {
    measure: '',
  };

  describe('isFinancial', () => {
    it('Should validate against FinancialObservation', () => {
      expect(isFinancial(financialObservation as Observation)).toBe(true);
    });

    it('Should not validate against NonFinancialObservation', () => {
      expect(isFinancial(nonFinancialObservation as Observation)).toBe(false);
    });
  });

  describe('isNonFinancial', () => {
    it('Should validate against NonFinancialObservation', () => {
      expect(isNonFinancial(nonFinancialObservation as Observation)).toBe(true);
    });

    it('Should not validate against FinancialObservation', () => {
      expect(isNonFinancial(financialObservation as Observation)).toBe(false);
    });
  });
});

describe('Options', () => {
  const entityWithOptionGroups: WithOptionDetails = {
    optionDetails: {
      optionGroups: [],
    },
  };

  const entityWithOptionsToCombine: WithOptionDetails = {
    optionDetails: {
      optionsToCombine: [],
    },
  };

  describe('hasOptionGroups', () => {
    it('Should validate against entity with optionGroups', () => {
      expect(hasOptionGroups(entityWithOptionGroups)).toBe(true);
    });

    it('Should not validate against entity with optionsToCombine', () => {
      expect(hasOptionGroups(entityWithOptionsToCombine)).toBe(false);
    });
  });

  describe('hasOptionsToCombine', () => {
    it('Should validate against entity with optionsToCombine', () => {
      expect(hasOptionsToCombine(entityWithOptionsToCombine)).toBe(true);
    });

    it('Should not validate against entity with optionGroups', () => {
      expect(hasOptionsToCombine(entityWithOptionGroups)).toBe(false);
    });
  });
});

describe('Requirements', () => {
  describe('Criterion', () => {
    const tendererCriterion: Partial<TendererCriterion> = {
      relatesTo: 'tenderer',
    };

    const itemCriterion: Partial<ItemCriterion> = {
      relatesTo: 'item',
    };

    describe('isRelatedToTenderer', () => {
      it('Should validate against related to tenderer Criterion', () => {
        expect(isRelatedToTenderer(tendererCriterion as Criterion)).toBe(true);
      });

      it('Should not validate against related to item Criterion', () => {
        expect(isRelatedToTenderer(itemCriterion as Criterion)).toBe(false);
      });
    });

    describe('isRelatedToItem', () => {
      it('Should validate against related to item Criterion', () => {
        expect(isRelatedToItem(itemCriterion as Criterion)).toBe(true);
      });

      it('Should not validate against related to tenderer Criterion', () => {
        expect(isRelatedToItem(tendererCriterion as Criterion)).toBe(false);
      });
    });
  });

  describe('Requirement', () => {
    const requirement: Partial<Requirement> = {
      dataType: undefined,
    };

    const stringRequirement: Partial<StringRequirement> = {
      dataType: 'string',
    };

    let numberRequirement: Partial<NumberRequirement>;

    const booleanRequirement: Partial<BooleanRequirement> = {
      dataType: 'boolean',
    };

    beforeEach(() => {
      numberRequirement = {
        dataType: Math.random() <= 0.5 ? 'number' : 'integer',
      };
    });

    describe('isOfTypeString', () => {
      it('Should validate against StringRequirement', () => {
        expect(isOfTypeString(stringRequirement as Requirement)).toBe(true);
      });

      it('Should not validate against any other Requirement', () => {
        expect(isOfTypeString(requirement as Requirement)).toBe(false);
        expect(isOfTypeString(numberRequirement as Requirement)).toBe(false);
        expect(isOfTypeString(booleanRequirement as Requirement)).toBe(false);
      });
    });

    describe('isOfTypeNumber', () => {
      it('Should validate against NumberRequirement', () => {
        expect(isOfTypeNumber(numberRequirement as Requirement)).toBe(true);
      });

      it('Should not validate against any other Requirement', () => {
        expect(isOfTypeNumber(requirement as Requirement)).toBe(false);
        expect(isOfTypeNumber(stringRequirement as Requirement)).toBe(false);
        expect(isOfTypeNumber(booleanRequirement as Requirement)).toBe(false);
      });
    });

    describe('isOfTypeBoolean', () => {
      it('Should validate against BooleanRequirement', () => {
        expect(isOfTypeBoolean(booleanRequirement as Requirement)).toBe(true);
      });

      it('Should not validate against any other Requirement', () => {
        expect(isOfTypeBoolean(requirement as Requirement)).toBe(false);
        expect(isOfTypeBoolean(numberRequirement as Requirement)).toBe(false);
        expect(isOfTypeBoolean(stringRequirement as Requirement)).toBe(false);
      });
    });
  });
});
