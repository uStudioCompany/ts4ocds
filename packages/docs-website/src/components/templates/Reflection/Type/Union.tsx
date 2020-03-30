import React, { ReactNode } from 'react';
import { v4 } from 'uuid';
import { IntersectionType, UnionType } from '../../../../api/typings';
import { isIntrinsic } from '../../../../api/validator';
import Reference from './Reference';
import Reflection from './Reflection';

const mapUnion = (union: UnionType | IntersectionType): ReactNode[] => {
  return union.types
    .filter((type) => !(isIntrinsic(type) && type.name === 'undefined'))
    .map((type) => {
      switch (type.type) {
        case 'intrinsic': {
          return type.name;
        }
        case 'stringLiteral': {
          return `'${type.value}'`;
        }
        case 'reference': {
          return <Reference {...type} />;
        }
        case 'reflection': {
          return <Reflection {...type} />;
        }
        default: {
          return '';
        }
      }
    });
};

const renderNode = (separator: '|' | '&') => (node: ReactNode, index: number, array: ReactNode[]) => {
  return (
    <React.Fragment key={v4()}>
      {node}
      {index < array.length - 1 && <>&nbsp;{separator}&#32;</>}
    </React.Fragment>
  );
};

const Union: React.FC<(UnionType | IntersectionType) & { separator?: '|' | '&' }> = ({ separator = '|', ...union }) => {
  return <>{mapUnion(union).map(renderNode(separator))}</>;
};

export default Union;
