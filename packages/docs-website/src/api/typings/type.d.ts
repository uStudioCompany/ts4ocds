import type { BasicType } from './basic-type';
import type { VariableReflection } from './reflection';

export type Type = BasicType | UnionType | IntersectionType | ArrayType | ObjectType;

export interface ObjectType {
  type: 'reflection';
  declaration: {
    name: '__type';
    kindString: 'Type literal';
    children?: VariableReflection[];
  };
}

export interface UnionType {
  type: 'union';
  types: Type[];
}

export interface IntersectionType {
  type: 'intersection';
  types: Type[];
}

export interface ArrayType {
  type: 'array';
  elementType: Type;
}
