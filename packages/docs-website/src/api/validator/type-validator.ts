import type {
  ArrayType,
  Conditional,
  IndexedAccess,
  IntersectionType,
  Intrinsic,
  ObjectType,
  Reference,
  StringLiteral,
  Type,
  UnionType,
} from '../schema';

export const isConditional = (type: Type): type is Conditional => type.type === 'conditional';

export const isIndexedAccess = (type: Type): type is IndexedAccess => type.type === 'indexedAccess';

export const isReference = (type: Type): type is Reference => type.type === 'reference';

export const isIntrinsic = (type: Type): type is Intrinsic => type.type === 'intrinsic';

export const isStringLiteral = (type: Type): type is StringLiteral => type.type === 'stringLiteral';

export const isArray = (type: Type): type is ArrayType => type.type === 'array';

export const isObject = (type: Type): type is ObjectType => type.type === 'reflection';

export const isIntersection = (type: Type): type is IntersectionType => type.type === 'intersection';

export const isUnion = (type: Type): type is UnionType => type.type === 'union';
