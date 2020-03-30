export type BasicType = StringLiteral | Intrinsic | Reference | IndexedAccess | Conditional;

export interface StringLiteral {
  type: 'stringLiteral';
  value: string;
}

export interface Intrinsic {
  type: 'intrinsic';
  name: string;
}

export interface Reference {
  type: 'reference';
  id: number;
  name: string;
}

export interface IndexedAccess {
  type: 'indexedAccess';
  indexType: StringLiteral;
  objectType: Reference;
}

export interface Conditional {
  type: 'conditional';
  checkType: {
    type: 'typeParameter';
    name: string;
    constraint: BasicType;
  };
  extendsType: BasicType;
  trueType: BasicType;
  falseType: BasicType;
}
