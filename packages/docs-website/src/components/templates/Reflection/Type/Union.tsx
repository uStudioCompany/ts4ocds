import React, { ReactNode } from 'react';
import { v4 } from 'uuid';
import { IntersectionType, UnionType } from '../../../../api/typings';
import { isIntrinsic } from '../../../../api/validator';
import renderType from './render-type';

const mapUnion = (union: UnionType | IntersectionType): ReactNode[] => {
  return union.types
    .filter((type) => !(isIntrinsic(type) && type.name === 'undefined'))
    .map(renderType);
};

const renderNode = (separator: '|' | '&') => (node: ReactNode, index: number, array: ReactNode[]) => {
  return (
    <React.Fragment key={v4()}>
      {node}
      {index < array.length - 1 && <>{` ${separator} `}</>}
    </React.Fragment>
  );
};

const Union: React.FC<(UnionType | IntersectionType) & { separator?: '|' | '&' }> = ({ separator = '|', ...union }) => {
  return <>{mapUnion(union).map(renderNode(separator))}</>;
};

export default Union;
