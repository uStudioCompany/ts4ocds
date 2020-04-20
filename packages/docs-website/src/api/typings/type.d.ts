import type { BasicType } from './basic-type';
import type { VariableReflection } from './reflection';

export type Type =
  | BasicType
  | UnionType
  | IntersectionType
  | ArrayType
  | ObjectType
  | IndexSignatureType
  | TypeParameterType;

export interface ReflectionType {
  type: 'reflection';
}

export interface ObjectType extends ReflectionType {
  declaration: {
    name: '__type';
    kindString: 'Type literal';
    children?: VariableReflection[];
  };
}

export interface IndexSignatureType extends ReflectionType {
  declaration: {
    name: '__type';
    kindString: 'Type literal';
    indexSignature: [
      {
        parameters: [
          {
            name: string;
            kindString: 'Parameter';
            type: Type;
          }
        ];
        type: Type;
      }
    ];
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

export interface TypeParameterType {
  type: 'typeParameter';
  name: string;
  constraint?: {
    name: string;
    id: string;
    type: Type;
  };
}
