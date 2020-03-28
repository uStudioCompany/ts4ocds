import { UnionType } from '../schema';
import { isIntrinsic } from '../validator';

export const sortUnion = (union: UnionType): string[] => {
  return union.types
    .filter((type) => !(isIntrinsic(type) && type.name === 'undefined'))
    .map((type) => {
      switch (type.type) {
        case 'intrinsic': {
          return type.name;
        }
        case 'stringLiteral': {
          return `\`${type.value}\``;
        }
        case 'reference': {
          return `${type.id}`;
        }
        case 'reflection': {
          // @ToDo: somehow parse a reflection type
          return '{}';
        }
        default: {
          return '';
        }
      }
    });
};
