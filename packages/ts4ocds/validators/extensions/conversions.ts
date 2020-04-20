import { Conversion, RelatedConversion } from '../../extensions/conversions';

export const isRelated = (conversion: Conversion): conversion is RelatedConversion => {
  return 'relatesTo' in conversion;
};
