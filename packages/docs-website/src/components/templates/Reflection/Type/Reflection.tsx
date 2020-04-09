import React, { ReactNode } from 'react';
import { IndexSignatureType, ObjectType, VariableReflection } from '../../../../api/typings';
import renderType from './render-type';

const renderIndexSignature = (reflection: IndexSignatureType) => {
  const indexSignature = reflection.declaration.indexSignature?.[0];

  if (!indexSignature) {
    return '';
  }

  const parameter = indexSignature.parameters[0];

  return (
    <>
      [{parameter.name}: {renderType(parameter.type)}]: {renderType(indexSignature.type)}
    </>
  );
};

const renderVariable = ({ name, flags, type }: VariableReflection, index: number, array: VariableReflection[]) => {
  return (
    <React.Fragment key={name}>
      {name}
      {flags?.isOptional ? '?' : ''}:&#32;{renderType(type)}
      {index < array.length - 1 && <>, </>}
    </React.Fragment>
  );
};

const mapVariables = (children?: VariableReflection[]): ReactNode => {
  if (children) {
    return <>{children.map(renderVariable)}&#32;</>;
  }

  return '';
};

const Reflection: React.FC<IndexSignatureType | ObjectType> = (reflection) => {
  return (
    <>
      {`{ `}
      {(reflection as ObjectType).declaration?.children
        ? mapVariables((reflection as ObjectType).declaration?.children as VariableReflection[] | undefined)
        : renderIndexSignature(reflection as IndexSignatureType)}
      {` }`}
    </>
  );
};

export default Reflection;
