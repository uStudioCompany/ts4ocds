import type { BasicType } from './basic-type';

export type Type = BasicType | UnionType | IntersectionType | ArrayType | ObjectType;

export interface ObjectType {
  type: 'reflection';
  declaration: {
    name: '__type';
    kindString: 'Type literal';
  };
}

export interface UnionType {
  type: 'union';
  types: BasicType[];
}

export interface IntersectionType {
  type: 'intersection';
  types: BasicType[];
}

export interface ArrayType {
  type: 'array';
  elementType: BasicType;
}
