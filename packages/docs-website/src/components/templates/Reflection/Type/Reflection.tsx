import React, { ReactNode } from 'react';
import { ObjectType, VariableReflection } from '../../../../api/typings';
import renderType from './render-type';

const renderVariable = ({ name, flags, type }: VariableReflection, index: number, array: VariableReflection[]) => {
  return (
    <React.Fragment key={name}>
      {name}
      {flags?.isOptional ? '?' : ''}:&#32;{renderType(type)}
      {index < array.length - 1 && <>, </>}
    </React.Fragment>
  );
};

const mapChildren = (children?: VariableReflection[]): ReactNode => {
  if (children) {
    return <>{children.map(renderVariable)}&#32;</>;
  }

  return '';
};

const Reflection: React.FC<ObjectType> = (reflection) => {
  return (
    <>
      {`{`}&#32;{mapChildren(reflection.declaration?.children as VariableReflection[] | undefined)}
      {`}`}
    </>
  );
};

export default Reflection;
