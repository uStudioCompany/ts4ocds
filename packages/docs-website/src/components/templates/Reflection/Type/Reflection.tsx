import React, { ReactNode } from 'react';
import { ObjectType, VariableReflection } from '../../../../api/schema';
import renderType from './render-type';

const renderVariable = ({ name, flags, type }: VariableReflection, index: number, array: VariableReflection[]) => {
  return (
    <>
      {name}
      {flags?.isOptional ? '?' : ''}:&nbsp;{renderType(type)}
      {index < array.length - 1 && <>, </>}
    </>
  );
};

const mapChildren = (children?: VariableReflection[]): ReactNode => {
  if (children) {
    return <>{children.map(renderVariable)}&nbsp;</>;
  }

  return '';
};

const Reflection: React.FC<ObjectType> = (reflection) => {
  return (
    <>
      {`{`}&nbsp;{mapChildren(reflection.declaration?.children as VariableReflection[] | undefined)}
      {`}`}
    </>
  );
};

export default Reflection;
